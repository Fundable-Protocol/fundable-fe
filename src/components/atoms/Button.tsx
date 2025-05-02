"use client";

import { FC, useEffect, useState } from "react";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { Button } from "../ui/button";
import { useAccount, useConnect } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import { setWalletState } from "@/store/wallet";
import { toast } from 'react-toastify';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const ConnectWalletButton: FC<ButtonProps> = ({ className }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { connectors, connect, error } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as unknown as StarknetkitConnector[],
  });

  const { address, account, status } = useAccount();
  const router = useRouter();

  // Log connection errors
  useEffect(() => {
    if (error) {
      console.error("Connection error:", error);
      toast.error(`Connection error: ${error.message || "Unknown error"}`);
      setIsConnecting(false);
    }
  }, [error]);

  useEffect(() => {
    console.log("Account status:", status);
    
    // When connection is successful (status becomes 'connected')
    if (status === 'connected' && address && account && isConnecting) {
      console.log("Connection successful, navigating to dashboard");
      setIsConnecting(false);
      setWalletState(address, account, true);
      router.push("/dashboard");
    }
  }, [status, address, account, router, isConnecting]);

  const handleConnect = async () => {
    console.log("Available connectors:", connectors);
    
    // Only set connecting state if not already connecting
    if (isConnecting) return;
    
    setIsConnecting(true);
    
    try {
      // Open the modal and wait for user to select a connector
      const result = await starknetkitConnectModal();
      const connector = result?.connector;
      
      if (connector) {
        console.log("Selected connector:", connector);
        
        // Log which connector was selected
        if (connector.id === 'controller') {
          console.log("Controller connector selected");
        }
        
        try {
          // Use the public interface to connect
          await connect({ connector });
          console.log("Connect initiated with connector:", connector);
        } catch (connectError) {
          console.error("Connection error:", connectError);
          toast.error("Error connecting to wallet. Please try again.");
          throw connectError; 
        }
      } else {
        console.log("No connector selected");
        toast.warning("No wallet selected. Please select a wallet to continue.");
      }
    } catch (error) {
      console.error("Connection process error:", error);
      toast.error("Failed to complete wallet connection. Please try again.");
    } finally {
      
      if (status !== 'connected') {
        setIsConnecting(false);
      }
    }
  };

  return (
    <Button 
      onClick={handleConnect} 
      variant="gradient" 
      className={className}
      disabled={isConnecting}
    >
      {isConnecting ? "Connecting..." : "Launch App"}
    </Button>
  );
};

export default ConnectWalletButton;
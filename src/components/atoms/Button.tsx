"use client";

import { FC, useEffect } from "react";
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
  const { connectors, connect, isSuccess } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as unknown as StarknetkitConnector[],
  });

  const { address, account } = useAccount();
  const route = useRouter()
  const handleConnect = async () => {

    const { connector } = await starknetkitConnectModal()
    try {
      if (connector) {
        await connect({ connector })
      } else {
        console.error("No connectors available");
        toast.warning("No wallet connectors found. Please make sure Argent or Braavos is installed.");
      }
    } catch (error) {
      console.error("Wallet Connection Failed:", error);
      toast.error("Failed to connect wallet. Try again.");
    }



  };

  useEffect(() => {
    if (isSuccess && address && account) {
      route.push("/dashboard")
      setWalletState(address, account, true)
    }
  }, [isSuccess, address, account, route])
  return (
    <>
      <Button onClick={() => handleConnect()} variant="gradient" className={className}>
        Launch App
      </Button>
    </>
  );
};

export default ConnectWalletButton;

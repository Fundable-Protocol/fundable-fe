"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WalletDisplayProps {
  address: string;
}

const WalletDisplay: React.FC<WalletDisplayProps> = ({ address }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Format address: 0x1234...5678
  const formatAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center space-x-2
          rounded-sm azure-violet-bg
          px-4 py-2 text-white transition-all
        "
      >
        <img alt="qr-code" src="/qr-code-real.svg" className="w-6 h-6" />
        <span>{formatAddress(address)}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {/* {isOpen && (
        <div
          className="
            absolute right-0 mt-2 w-48
            rounded-xl bg-gray-800 shadow-lg
          "
        >
          <div className="p-4 text-sm text-white">Connected Wallet</div>
          <button
            className="block w-full p-2 text-left text-gray-300 hover:bg-gray-700"
            onClick={() => alert("Disconnected")}
          >
            Disconnect
          </button>
        </div>
      )} */}
    </div>
  );
};

export default WalletDisplay;

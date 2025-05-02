"use client";

import React from "react";
import { sepolia, mainnet, Chain } from "@starknet-react/chains";
import {
  StarknetConfig,
  voyager,
  useInjectedConnectors,
  jsonRpcProvider,
} from "@starknet-react/core";
import { ControllerConnector } from "@cartridge/connector";
import { ControllerOptions } from "@cartridge/controller";

// Define ControllerOptions with proper configuration
const controllerOptions: ControllerOptions = {
  url: "https://api.cartridge.gg/x/starknet/sepolia",
  defaultChainId: sepolia.id.toString(),
  chains: [
    { ...mainnet, rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
    { ...sepolia, rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
  ],
};

// Create a properly configured controller connector
const cartridgeConnector = new ControllerConnector(controllerOptions);

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const { connectors: injectedConnectors } = useInjectedConnectors({
    order: "random",
  });
  
  const allConnectors = [
    ...injectedConnectors,
    cartridgeConnector
  ];

  const provider = jsonRpcProvider({
    rpc: (chain: Chain) => {
      switch (chain.id) {
        case mainnet.id:
          return { nodeUrl: "https://api.cartridge.gg/x/starknet/mainnet" };
        default:
          console.warn(`Unknown chain ID: ${chain.id}, defaulting to Sepolia`);
          return { nodeUrl: "https://api.cartridge.gg/x/starknet/sepolia" };
      }
    },
  });

  return (
    <StarknetConfig
      autoConnect
      chains={[mainnet, sepolia]}
      provider={provider}
      connectors={allConnectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
};

export default WalletProvider;
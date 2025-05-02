"use client";

import React, { useEffect } from "react";
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

// Log the connector details for debugging
console.log("Controller Connector initialized with ID:", cartridgeConnector.id);
console.log("Controller name:", cartridgeConnector.name);
console.log("Controller options:", controllerOptions);

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const { connectors: injectedConnectors } = useInjectedConnectors({
    order: "random",
  });
  
  // Add the cartridge connector to the list
  const allConnectors = [
    ...injectedConnectors,
    cartridgeConnector
  ];
  
  // Log all available connectors on mount
  useEffect(() => {
    console.log("All available connectors:", 
      allConnectors.map(c => ({ id: c.id, name: c.name }))
    );
  }, []);

  const provider = jsonRpcProvider({
    rpc: (chain: Chain) => {
      switch (chain.id) {
        case mainnet.id:
          return { nodeUrl: "https://api.cartridge.gg/x/starknet/mainnet" };
        case sepolia.id:
          return { nodeUrl: "https://api.cartridge.gg/x/starknet/sepolia" };
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
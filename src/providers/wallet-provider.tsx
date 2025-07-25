"use client";
import React from "react";

import { sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  injected,
  voyager,
} from "@starknet-react/core";
import ControllerConnector from "@cartridge/connector/controller";

// Instantiate ControllerConnector outside the component to avoid recreation on every render
const controllerConnector = new ControllerConnector({
  chains: [
    { rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
    { rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
  ],
  // You can add defaultChainId or other config here if needed
});

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  // All supported connectors
  const connectors = [
    argent(),
    braavos(),
    injected({ id: "injected" }), // NOTE: If session restoration is needed, consider using useInjectedConnectors()
    controllerConnector, // Cartridge wallet
  ];

  return (
    <StarknetConfig
      chains={[mainnet, sepolia]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
};

export default WalletProvider;

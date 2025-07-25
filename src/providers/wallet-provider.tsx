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

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  // All supported connectors (excluding 'ready', which is not exported)
  const connectors = [
    argent(),
    braavos(),
    injected({ id: "injected" }),
    new ControllerConnector(), // Cartridge wallet
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

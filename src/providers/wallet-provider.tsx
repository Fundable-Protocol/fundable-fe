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


const controllerConnector = new ControllerConnector({
  chains: [
    { rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
    { rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
  ],
  
});

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  // All supported connectors
  const connectors = [
    argent(),
    braavos(),
    injected({ id: "injected" }),
    controllerConnector, 
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

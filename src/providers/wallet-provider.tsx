"use client";
import React from "react";

import { sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  // argent,
  // braavos,
  useInjectedConnectors,
  voyager,
} from "@starknet-react/core";
import cartridgeConnector from "./catridge-connector";

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
    const { connectors } = useInjectedConnectors({
        // recommended: [
        //     argent(),
        //     braavos(),
        // ],
        order: "random",
    });

    return (
        <StarknetConfig
            chains={[mainnet, sepolia]}
            provider={publicProvider()}
            connectors={[...connectors,cartridgeConnector]}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
};

export default WalletProvider;
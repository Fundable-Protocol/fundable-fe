"use client";
import React from "react";

import { sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  voyager,
} from "@starknet-react/core";
import cartridgeConnector from "./catridge-connector";
import { InjectedConnector } from "starknetkit/injected";
import { WebWalletConnector } from "starknetkit/webwallet";
import { ArgentMobileConnector } from "starknetkit/argentMobile";

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  
    const connectors = [
      new InjectedConnector({
        options: { id: "argentX", name: "Argent X" },
      }),
      new InjectedConnector({
        options: { id: "braavos", name: "Braavos" },
      }),
      new InjectedConnector({
        options: { id: "metamask", name: "MetaMask" },
      }),
      new InjectedConnector({
        options: { id: "keplr", name: "Keplr" },
      }),
      new InjectedConnector({
        options: { id: "okxwallet", name: "OKX" },
      }),
      new WebWalletConnector({ url: "https://web.argent.xyz" }),
      ArgentMobileConnector.init({
        options: {
          dappName: "Fortichain", // Replace with your app's name
          url: "https://web.argent.xyz",
        },
      }),
    ];
  

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
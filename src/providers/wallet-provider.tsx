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

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
    const { connectors } = useInjectedConnectors({
        // recommended: [
        //     argent(),
        //     braavos(),
        // ],
        order: "random"
    });

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
}


export default WalletProvider
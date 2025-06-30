import { Connector } from "@starknet-react/core";
import { ControllerConnector } from "@cartridge/connector";
import { ControllerOptions } from "@cartridge/controller";
import { constants } from "starknet";

const getRpcUrl = () => {
      return "https://api.cartridge.gg/x/starknet/sepolia";
  }

const getDefaultChainId = () => {
      return constants.StarknetChainId.SN_SEPOLIA;
  }

const options: ControllerOptions = {
  chains: [{ rpcUrl: getRpcUrl() }],
  defaultChainId: getDefaultChainId(),
  namespace: "fundable",
  slot: "fundable",
};

const cartridgeConnector = new ControllerConnector(
  options
) as never as Connector;

export default cartridgeConnector;

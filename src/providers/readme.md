## WalletProvider.tsx
## Main Role:
- It initializes the Starknet environment for your app by configuring:

- Supported chains (mainnet, sepolia)

- RPC endpoints

- Available wallet connectors (e.g., ArgentX, Braavos, or Cartridge)

- Blockchain explorer (Voyager)

- All these are wrapped in a <StarknetConfig> provider — similar to a React context — to make wallet features available to the whole app.

## Breakdown of Major Components:
## Chains Setup

These represent the network environments.

mainnet: the live production network

sepolia: the test network

## ControllerConnector (Cartridge Integration)

- const cartridgeConnector = new ControllerConnector(controllerOptions);
- ControllerConnector is used to connect to Cartridge wallets.

- ControllerOptions define which chains are supported and how to communicate with Cartridge’s API.

## useInjectedConnectors

- Detects browser-injected wallets like ArgentX or Braavos.

- The order: "random" parameter randomly orders them in the wallet modal.

## jsonRpcProvider

- Sets up custom endpoints for interacting with the blockchain.

- Uses different nodeUrls depending on which chain is selected (mainnet or sepolia).

## StarknetConfig Provider

- Wraps your entire app or a section of it.

- autoConnect: attempts to reconnect wallets on refresh.

- explorer={voyager}: sets Voyager as the default block explorer.
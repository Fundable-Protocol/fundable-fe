## ConnectWalletButton.tsx
## Main Role:
This is the UI and logic for the "Launch App" button that lets users:

- Open a wallet selection modal

- Choose a wallet (e.g., ArgentX, Braavos, or Cartridge)

- Connect to the selected wallet

- Save the wallet data

- Redirect to the /dashboard

## Detailed Flow:
## Hooks and Dependencies
- useConnect: hook from @starknet-react/core to manage the wallet connection.

- useStarknetkitConnectModal: opens a UI modal to let users choose a wallet.

- useAccount: gets connection status, wallet address, and account.

## State and Navigation
- isConnecting prevents double-submission of connection requests.

- router.push("/dashboard") redirects user after a successful connection.

## Error Handling
- Displays error messages using react-toastify when a connection fails.

## Auto-redirect on Connection
- After connecting, saves the wallet info using setWalletState() (likely updates global state).

- Then routes the user to the dashboard.

 ## Connect Wallet Logic

When the user clicks the button:

- A modal opens to select a wallet.

- The selected wallet's connector is used to connect.

- On success, useAccount() updates with the wallet address and account.

## Conditional Button Text

- Shows a loading state while the wallet is being connected.

## ConnectWalletButton Summary

-  Triggers modal selection

- Initiates wallet connection

- Saves wallet state

- Redirects on success
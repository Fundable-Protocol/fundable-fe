// store/wallet.ts
import { entity, persistence } from "simpler-state";
import { AccountInterface } from "starknet";
import Cookies from "js-cookie";
export interface WalletState {
  address: string | null;
  isConnected: boolean;
  account: AccountInterface | null;
}

const walletStore = entity<WalletState>(
  {
    address: null,
    account: null,
    isConnected: false,
  },
  [persistence("wallet", { storage: "local" })]
);

export const setWalletState = (
  address: string | null,
  account: AccountInterface | null,
  isConnected: boolean
) => {
  walletStore.set({ address, isConnected, account });
  Cookies.set("walletConnected", isConnected ? "true" : "false", {
    expires: 7,
    path: "/",
  });
};

export const disconnectWallet = () => {
  walletStore.set({ address: null, isConnected: false, account: null });
  Cookies.remove("walletConnected");
  localStorage.removeItem("wallet");
};

export default walletStore;

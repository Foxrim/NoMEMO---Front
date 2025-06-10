import { useContext } from "react";
import { AccountContext } from "./Account.context";

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount doit être utilisé avec AccountProvider");
  }
  return context;
};

import { createContext } from "react";

export const ShopContex = createContext();

export const ContexProvider = ({ children }) => {
  const value = {
    example: "Hello from Context!",
  };

  return <ShopContex.Provider value={value}>{children}</ShopContex.Provider>;
};

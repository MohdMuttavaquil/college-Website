import { useState, createContext } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [profile, setProfile] = useState(false);

  return (
    <StoreContext.Provider value={{ profile, setProfile }}>
      {children}
    </StoreContext.Provider>
  );
}

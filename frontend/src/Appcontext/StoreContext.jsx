import { useState, createContext } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {

  //const url = "http://localhost:3000"
  //const url = "https://college-website-beckend.onrender.com"
  const url = 'http://13.201.30.142:3000'
  const [profile, setProfile] = useState(false);

  return (
    <StoreContext.Provider value={{ profile, setProfile, url }}>
      {children}
    </StoreContext.Provider>
  );
}

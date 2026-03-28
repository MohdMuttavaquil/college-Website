import { useState, createContext } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {

  //const url = "http://localhost:3000"
  const url = "https://3qiozqjj4f2ewuopcymi7jxzea0dyxxq.lambda-url.ap-south-1.on.aws"
 
  const [profile, setProfile] = useState(false);

  return (
    <StoreContext.Provider value={{ profile, setProfile, url }}>
      {children}
    </StoreContext.Provider>
  );
}

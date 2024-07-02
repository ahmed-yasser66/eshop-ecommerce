import { createContext, useContext, useState } from "react";

const TokenContext = createContext(false);
export const useTokenContext = () => useContext(TokenContext);
const LoginContext = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
export default LoginContext;

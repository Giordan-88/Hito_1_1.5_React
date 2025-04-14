import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(!!storedToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/");
  };

  const login = () => {
    localStorage.setItem("token" , true);
    setToken(true);
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
}

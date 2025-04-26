import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    setToken(storedToken);
    setEmail(storedEmail);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    navigate("/");
  };

  const login = (email, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setToken(token);
    setEmail(email);
    navigate("/");
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.error) {
        return { success: false, message: data.error };
      }

      login(email, data.token);
      return { success: true, message: "Bienvenido a Pizzería Mamma Mia!" };
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      return {
        success: false,
        message: "Error al iniciar sesión. Inténtelo nuevamente.",
      };
    }
  };

  const registerUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        return { success: false, message: data.error };
      }

      login(data.email, data.token);
      return {
        success: true,
        message: "Registro exitoso. Bienvenido a Pizzería Mamma Mia!",
      };
    } catch (error) {
      console.error("Error en el registro:", error);
      return {
        success: false,
        message: "Error al registrar. Inténtelo nuevamente.",
      };
    }
  };

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        console.error("Error al obtener los datos del usuario:", data.error);
        return null;
      }

      return data;
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, logout, loginUser, registerUser, getUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

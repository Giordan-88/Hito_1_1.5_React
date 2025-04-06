import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import Cart from "./pages/Cart";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import E404 from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showCart, setShowC] = useState(false);

  const handleCloseC = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  return (
    <div style={{ width: "100vw" }}>
      <Navbar navtext={"NAVBAR"} handleShowC={handleShowC} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/NotFound" element={<E404 />} />
        <Route path="*" element={<E404 />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Cart show={showCart} handleClose={handleCloseC} />

      <Footer
        footerText={
          "© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"
        }
      />
    </div>
  );
}
export default App;

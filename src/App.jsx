import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import E404 from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  const [cart, setCart] = useState({});
  const [showCart, setShowC] = useState(false);

  const handleCloseC = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCartUpdate = (updatedCart) => {
    setCart(updatedCart);
  };

  const handleIncrease = (id) => {
    const newCart = { ...cart };

    if (newCart[id]) {
      newCart[id].quantity += 1;

      setCart(newCart);
    }
  };

  const handleDecrease = (id) => {
    const newCart = { ...cart };

    if (newCart[id]) {
      newCart[id].quantity -= 1;

      if (newCart[id].quantity <= 0) {
        delete newCart[id];
      }

      setCart(newCart);
    }
  };
  return (
    <div style={{ width: "100vw" }}>
      <Navbar
        totalItems={totalItems}
        totalPrice={totalPrice}
        navtext={"NAVBAR"}
        handleShowC={handleShowC}
      />

      <Routes>
        <Route path="/" element={<Home cart={cart} onCartUpdate={handleCartUpdate}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/NotFound" element={<E404 />} />
        <Route path="/pizza/p001" element={<Pizza />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage cart={cart} />} /> 
      </Routes>

      <Cart
        cart={cart}
        show={showCart}
        handleClose={handleCloseC}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
      
      
      <Footer
        footerText={
          "© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"
        }
      />
    </div>
  );
}

export default App;

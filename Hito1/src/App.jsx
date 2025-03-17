import Home from "./assets/Home";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./assets/Cart";
import { useState, useCallback } from "react";

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
    // Make a copy of the cart
    const newCart = { ...cart };
  
    // Increase quantity
    if (newCart[id]) {
      newCart[id].quantity += 1;
      // Set the new cart state directly
      setCart(newCart);
    }
  };
  
  const handleDecrease = (id) => {
    // Make a copy of the cart
    const newCart = { ...cart };
  
    // Decrease quantity
    if (newCart[id]) {
      newCart[id].quantity -= 1;
  
      // Remove item if quantity is zero
      if (newCart[id].quantity <= 0) {
        delete newCart[id];
      }
  
      // Set the new cart state directly
      setCart(newCart);
    }
  };
  return (
    <div>
      <Navbar
        totalItems={totalItems}
        totalPrice={totalPrice}
        navtext={"NAVBAR"}
        handleShowC={handleShowC}
      />
      <Cart
        cart={cart}
        show={showCart}
        handleClose={handleCloseC}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />

      <Home cart={cart} onCartUpdate={handleCartUpdate} />
      <Footer
        footerText={
          "© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"
        }
      />
    </div>
  );
}

export default App;

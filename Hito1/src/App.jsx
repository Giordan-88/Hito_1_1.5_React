import Home from "./assets/Home";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./assets/Cart";
import { useState, useCallback } from "react";
import Pizza from "./assets/Pizza";
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
<Pizza />
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

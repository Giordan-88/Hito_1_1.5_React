import { useState, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import PizzaDetails from "./pages/PizzaDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./context/UserContext";

function App() {
  const [showCart, setShowC] = useState(false);
  const { token } = useContext(UserContext);
  const handleCloseC = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  return (
    <div style={{ width: "100vw" }}>
      <Navbar navtext={"NAVBAR"} handleShowC={handleShowC} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={token  ? <Navigate to="/" /> : <Login /> } />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" /> } />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/:id" element={<PizzaDetails />} />
        <Route path="*" element={<E404 />} />
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

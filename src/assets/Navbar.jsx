import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ButtonI from "./ButtonI";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function NavbarComponent({ handleShowC }) {
  const { totalItems, totalPrice } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  const handleCartShow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleShowC();
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary w-100">
      <Container>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontSize: "1.5rem",
          }}
        >
          <Navbar.Brand>Pizzería Mamma Mia!</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={setActiveClass}>
              <ButtonI href="#features" buttonText={"🍕 Home"} />
            </NavLink>
            <NavLink to="/pizza">
              <ButtonI href="#pizza1" buttonText={"🍕 Pizzas"} />
            </NavLink>

            {token ? (
              <>
                {/* Botones visibles cuando el usuario está logueado */}
                <NavLink to="/profile" className={setActiveClass}>
                  <ButtonI href="#action/3.1" buttonText={"🔓 Profile"} />
                </NavLink>
                <ButtonI
                  onClick={logout}
                  href="#action/3.2"
                  buttonText={"🔒 Logout"}
                />
              </>
            ) : (
              <>
                {/* Botones visibles cuando el usuario no está logueado */}
                <NavLink to="/login" className={setActiveClass}>
                  <ButtonI buttonText={"🔐 Login"} />
                </NavLink>
                <NavLink to="/register" className={setActiveClass}>
                  <ButtonI href="#pricing" buttonText={"🔐 Register"} />
                </NavLink>
              </>
            )}
          </Nav>

          {/* Botón Total (siempre visible) */}
          <Nav>
            <ButtonI
              href="#memes"
              buttonText={`🛒 Cart (${totalItems}) - $${totalPrice.toLocaleString()}`}
              onClick={handleCartShow}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

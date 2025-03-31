import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonI from "./ButtonI";
import Login from "../pages/Login";
import { useState } from "react";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import { Link } from "react-router-dom";

function NavbarComponent({ totalItems, totalPrice, handleShowC }) {
  const [showLogin, setShowL] = useState(false);
  const [showRegister, setShowR] = useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const handleCartShow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleShowC();
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary w-100">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <ButtonI href="#features" buttonText={"🍕 Home"} />
            </Link>
            <Link to="/pizza/p001">
              <ButtonI href="#pizza1" buttonText={"🍕 Pizza"} />{" "}
            </Link>
            <NavDropdown title="💼 Account" id="collapsible-nav-dropdown">
              <Link to="/profile">
                <ButtonI href="#action/3.1" buttonText={"🔓 Profile"} />
              </Link>
              <ButtonI href="#action/3.2" buttonText={"🔒 Logout"} />
              <ButtonI href="#action/3.3" buttonText={"📖 History"} />
            </NavDropdown>
            <Link to="/notfound">
              <ButtonI href="#action/3.4" buttonText={"🗺️ Map"} />
            </Link>
            <Link to="/login">
              {
                <ButtonI
                  /* href="#pricing" */
                  buttonText={"🔐 Login"}
                  /* onClick={handleShowL} */
                />
              }
            </Link>
            <Link to="/register">
              {
                <ButtonI
                  href="#pricing"
                  buttonText={"🔐 Register"}
                  /* onClick={handleShowR} */
                />
              }
            </Link>
          </Nav>
          <Nav>
            <ButtonI
              href="#memes"
              buttonText={`🛒 Cart (${totalItems}) - $${totalPrice.toLocaleString()}`}
              onClick={handleCartShow}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <Login show={showLogin} handleClose={handleCloseL} />
      <Register show={showRegister} handleClose={handleCloseR} /> */}
    </Navbar>
  );
}

export default NavbarComponent;

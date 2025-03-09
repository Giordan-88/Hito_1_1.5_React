import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonI from "./ButtonI";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";

function NavbarComponent() {
  const [showLogin, setShowL] = useState(false);
  const [showRegister, setShowR] = useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);
 

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <ButtonI href="#features" buttonText={"🍕 Home"} />
            <NavDropdown title="💼 Account" id="collapsible-nav-dropdown">
              <ButtonI href="#action/3.1" buttonText={"🔓 Profile"} />
              <ButtonI href="#action/3.2" buttonText={"🔒 Logout"} />
              <ButtonI href="#action/3.3" buttonText={"📖History"} />
            </NavDropdown>
            <ButtonI
              href="#pricing"
              buttonText={"🔐 Login"}
              onClick={handleShowL}
            />
            <ButtonI
              href="#pricing"
              buttonText={"🔐 Register"}
              onClick={handleShowR}
            />
          </Nav>
          <Nav>
            <ButtonI
              eventKey={2}
              href="#memes"
              buttonText={"🛒 Total: $25.000"}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Login show={showLogin} handleClose={handleCloseL} />
      <Register show={showRegister} handleClose={handleCloseR} />
    </Navbar>
  );
}

export default NavbarComponent;

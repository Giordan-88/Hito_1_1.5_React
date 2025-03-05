import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "./Button";
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button href="#features" buttonText={"🍕 Home"} />
            <NavDropdown title="💼 Account" id="collapsible-nav-dropdown">
              <Button href="#action/3.1" buttonText={"🔓 Profile"} />
              <Button href="#action/3.2" buttonText={"🔒 Logout"} />
              <Button href="#action/3.3" buttonText={"📖History"} />
            </NavDropdown>
            <Button href="#pricing" buttonText={"🔐 Login"} />
            <Button href="#pricing" buttonText={"🔐 Register"} />
          </Nav>
          <Nav>
            <Button
              eventKey={2}
              href="#memes"
              buttonText={"🛒 Total: $25.000"}
            />
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

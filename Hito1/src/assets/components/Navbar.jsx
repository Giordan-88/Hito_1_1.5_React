import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">🍕 Home</Nav.Link>

            <NavDropdown title="🔓 Profile" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">🔐 Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">🔒 Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">📖History</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">🔐 Register</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              🛒 Total: $25.000
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

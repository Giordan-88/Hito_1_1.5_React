import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Login({ show, handleClose }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const [welcomeMessage, setWelcomeMessage] = useState("");

  const validCredentials = {
    email: "pizza@hotmail.com",
    password: "pizza123",
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";

    setErrorMessage(null);

    if (!emailValue && !passwordValue) {
      setErrorMessage("Por favor, ingrese su correo y contraseña.");
      return;
    }

    if (!emailValue) {
      setErrorMessage("Por favor, ingrese su correo electrónico.");
      return;
    }

    if (!isValidEmail(emailValue)) {
      setErrorMessage("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (!passwordValue) {
      setErrorMessage("Por favor, ingrese su contraseña.");
      return;
    }

    if (
      emailValue === validCredentials.email &&
      passwordValue === validCredentials.password
    ) {
      console.log("Login successful!");
      setWelcomeMessage("Bienvenido a Pizzería Mamma Mia!");

      setErrorMessage(null);

      // Tiempo de espera antes de cerrar el modal
      setTimeout(() => {
        handleModalClose();
      }, 1000);
    } else {
      setErrorMessage("Correo o contraseña incorrectos. Inténtelo de nuevo.");
    }
  };

  const handleModalClose = () => {
    // Reseteo de campos y mensajes
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";

    setErrorMessage(null);
    setWelcomeMessage(null);
    handleClose();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <Card className="p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title>Iniciar Sesión</Card.Title>
          {/* <Button variant="close" onClick={handleModalClose} /> */}
        </Card.Header>
        <Card.Body>
          {errorMessage && (
            <Alert variant="danger" className="mb-3">
              {errorMessage}
            </Alert>
          )}

          {welcomeMessage && (
            <Alert variant="success" className="mb-3">
              {welcomeMessage}
            </Alert>
          )}

          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ejemplo: cliente@hotmail.com"
                ref={emailRef}
                className="mb-2"
                required
              />
              <Form.Text className="text-muted">
                Email de prueba: {validCredentials.email}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                ref={passwordRef}
                className="mb-2"
                required
              />
              <Form.Text className="text-muted">
                Contraseña de prueba: {validCredentials.password}
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Link to="/">
                <Button variant="secondary" onClick={handleModalClose}>
                  Volver
                </Button>
              </Link>
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;

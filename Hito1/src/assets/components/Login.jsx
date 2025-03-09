import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import Alert from "react-bootstrap/Alert";

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
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <Button variant="secondary" onClick={handleModalClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;

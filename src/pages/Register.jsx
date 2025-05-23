import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Register({ show, handleClose }) {
  const { registerUser } = useContext(UserContext);

  // Estados
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validity, setValidity] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Validaciones
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 6;
  const isValidConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword && password !== "";

  // Manejo de cambios en los campos
  const handleChange = (event) => {
    const { id, value } = event.target;
    const newFormData = { ...formData, [id]: value };
    setFormData(newFormData);

    if (submitted) {
      validateField(id, newFormData);
    }
  };

  // Validación de campos individuales
  const validateField = (fieldId, data = formData, isSubmitting = false) => {
    let isValid = false;

    if (fieldId === "email") {
      isValid = isValidEmail(data.email);
    } else if (fieldId === "password") {
      isValid = isValidPassword(data.password);
      if (data.confirmPassword) {
        validateField("confirmPassword", data, isSubmitting);
      }
    } else if (fieldId === "confirmPassword") {
      isValid = isValidConfirmPassword(data.password, data.confirmPassword);
    }

    setValidity((prevValidity) => {
      const newValidity = { ...prevValidity };
      if (data[fieldId] || isSubmitting) {
        newValidity[fieldId] = isValid ? "valid" : "invalid";
      } else {
        newValidity[fieldId] = null;
      }
      return newValidity;
    });

    return isValid;
  };

  // Manejo del checkbox de términos y condiciones
  const handleTermsChange = (event) => {
    setTermsAgreed(event.target.checked);
  };

  // Envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const emailValid = validateField("email", formData, true);
    const passwordValid = validateField("password", formData, true);
    const confirmPasswordValid = validateField(
      "confirmPassword",
      formData,
      true
    );

    setSubmitted(true);

    if (emailValid && passwordValid && confirmPasswordValid && termsAgreed) {
      const result = await registerUser(formData);

      if (result.success) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          resetForm();
        }, 1500);
      } else {
        setErrorMessage(result.message);
      }
    }
  };

  // Reiniciar formulario
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setValidity({
      email: null,
      password: null,
      confirmPassword: null,
    });
    setSubmitted(false);
    setTermsAgreed(false);
    setRegistrationSuccess(false);
  };

  // Cerrar modal
  const handleModalClose = () => {
    resetForm();
    handleClose();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <Card className="p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title>Crear Usuario</Card.Title>
        </Card.Header>
        <Card.Body>
          {registrationSuccess && (
            <Alert
              variant="success"
              onClose={() => setRegistrationSuccess(false)}
              dismissible
            >
              ¡Registro exitoso! Su cuenta ha sido creada.
            </Alert>
          )}
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage("")}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md="12" controlId="email">
              <Form.Label>Ingresar Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ejemplo: PizzeriaMammaMia!@hotmail.com"
                value={formData.email}
                onChange={handleChange}
                isValid={validity.email === "valid"}
                isInvalid={validity.email === "invalid"}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo válido.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Correcto.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="password">
              <Form.Label>Ingresar Contraseña:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  isValid={validity.password === "valid"}
                  isInvalid={validity.password === "invalid"}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  La contraseña debe tener al menos 6 caracteres.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Clave Válida.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="confirmPassword">
              <Form.Label>Confirmar Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                isValid={validity.confirmPassword === "valid"}
                isInvalid={validity.confirmPassword === "invalid"}
                required
              />
              <Form.Control.Feedback type="invalid">
                Las contraseñas no coinciden.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3">
              <Form.Check
                required
                id="terms"
                label="Acepto los términos y condiciones"
                feedback="Debe aceptar antes de enviar."
                feedbackType="invalid"
                checked={termsAgreed}
                onChange={handleTermsChange}
                isInvalid={submitted && !termsAgreed}
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-4">
              <Link to="/">
                <Button variant="secondary" onClick={handleModalClose}>
                  Volver
                </Button>
              </Link>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;

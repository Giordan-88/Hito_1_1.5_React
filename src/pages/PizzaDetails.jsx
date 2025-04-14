import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function PizzaDetails() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  const { capitalize } = useContext(CartContext);

  const getPizzaDetails = async () => {
    try {
      const url = `http://localhost:5000/api/pizzas/${id}`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error("Error al obtener los detalles de la pizza");
      const data = await response.json();
      setPizza(data);
      setError(null);
    } catch (e) {
      console.error("Error al obtener los detalles de la pizza:", e);
      setError("No se pudo cargar la información de la pizza.");
    }
  };

  useEffect(() => {
    getPizzaDetails();
  }, [id]);

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  if (!pizza) {
    return <p className="text-center">Cargando información de la pizza...</p>;
  }

  return (
    <div className="d-flex justify-content-center p-4">
      <Card style={{ width: "30rem" }} className="text-center">
        <Image
          variant="top"
          src={pizza.img}
          alt={pizza.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{capitalize(pizza.name)}</Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <h5 className="mt-3">Ingredientes:</h5>
          {pizza.ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>{capitalize(ingredient)}</ListGroup.Item>
          ))}
        </ListGroup>
        <Link to="/pizza">
          <Button variant="secondary" onClick={() => window.scrollTo(0, 0)} className="mt-3">
            Volver
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default PizzaDetails;

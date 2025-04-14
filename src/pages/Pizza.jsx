import { Image, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Pizza() {
  const { capitalize } = useContext(CartContext);

  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getPizzas = async () => {
    try {
      const url = `http://localhost:5000/api/pizzas`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener las pizzas");
      const data = await response.json();
      setPizzas(data);
      setError(null);
    } catch (e) {
      console.error("Error al obtener las pizzas:", e);
      setError("No se pudo cargar la información de las pizzas.");
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  if (!pizzas.length) {
    return <p className="text-center">Cargando información de las pizzas...</p>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
      {pizzas.map((pizza) => (
        <Card
          key={pizza.id}
          className="cardPizza"
          bg="light"
          text="dark"
          style={{ width: "15rem", textAlign: "center", cursor: "pointer" }}
          onClick={() => navigate(`/pizza/${pizza.id}`)} 
        >
          <Image
            variant="top"
            src={pizza.img}
            alt={pizza.name}
            className="cardPizza-image"
            style={{ height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold">{capitalize(pizza.name)}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Pizza;

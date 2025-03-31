import { Image, ListGroup, Button, CloseButton, Card } from "react-bootstrap";
import { useState, useEffect } from "react";


function Pizza({ id, title, image, ingredients, price, onAddToCart, desc }) {
  const [pizza, setPizza] = useState([]);
  const [id2, setId2] = useState("p001");
  function capitalizer(str) {
 
    if (!str || typeof str !== 'string') {
      return ''; }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const getPizza = async () => {
    if (!id2) return;
    try {
      const url_id = `http://localhost:5000/api/pizzas/${id2}`;
      const response = await fetch(url_id);
      if (!response.ok) throw new Error("Error de respuesta de Pizza");
      const data = await response.json();
      setPizza(data);
    } catch (e) {
      console.error("Error al obtener la pizza:", e);
    } finally {
    }
  };

  useEffect(() => {
    getPizza();
  }, [id2]);

  function pricer(num) {
    return num ? num.toLocaleString("es-CL") : "0";
  }

  return (
    <Card
      className="cardPizza"
      bg="light"
      text="dark"
      style={{ width: "20rem", textAlign: "center" }}
    >
      <Image
        variant="top"
        src={pizza.img}
        alt={pizza.name}
        className="cardPizza-image"
      />
      <Card.Body>
        <Card.Title>{capitalizer(pizza.name)}</Card.Title>
        <Card.Text>{pizza.desc}</Card.Text>
        <div className="ms-2 me-auto">
          
        </div>
      </Card.Body>
      {<ListGroup className="list-group-flush" as="ol" numbered>
  {(typeof pizza.ingredients === 'string' ? pizza.ingredients.split(',').map(item => item.trim()) : pizza.ingredients || [])
    .map((ingredient, index) => (
      <ListGroup.Item key={index} as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{capitalizer(ingredient)}</div>
        </div>
        <CloseButton />
      </ListGroup.Item>
    ))}
</ListGroup>}
      <Card.Body>
        <h2 className="fw-bold text-success">${pricer(pizza.price)}</h2>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button variant="success" >Ver más 👀</Button>
        <Button
          variant="outline-secondary"
          onClick={() => onAddToCart(id, title, image, price)}
        >
          Añadir 🛒
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Pizza;

import { Image, ListGroup, Button, CloseButton, Card } from "react-bootstrap";

function CardPizza({ id, title, image, ingredients, price, onAddToCart }) {
  return (
    <Card className="cardPizza" bg="light" text="dark" style={{ width: "20rem", textAlign: "center" }}>
      <Image variant="top" src={image} alt={title} className="cardPizza-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" as="ol" numbered>
        {ingredients.map((ingredient, index) => (
          <ListGroup.Item key={index} as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{ingredient}</div>
            </div>
            <CloseButton />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <h2 className="fw-bold text-success">${price.toLocaleString()}</h2>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button variant="success">Ver más 👀</Button>
        <Button variant="outline-secondary" onClick={() => onAddToCart( id, title, image, price )}>
          Añadir 🛒
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default CardPizza;
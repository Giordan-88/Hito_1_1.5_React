import Offcanvas from "react-bootstrap/Offcanvas";
import { Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {

  const { cart, totalPrice, handleDecrease, handleIncrease, capitalize } = useContext(CartContext);


  return (
    <div className="d-flex flex-column align-items-center vh-100">
      {Object.keys(cart).length > 0 ? (
        <ListGroup className="w-75">
          {Object.entries(cart).map(([id, item]) => (
            <ListGroup.Item
              key={id}
              className="d-flex align-items-center justify-content-between"
            >
              <Image
                src={item.image}
                rounded
                width={50}
                height={50}
                className="me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1 ">{capitalize(item.title)}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    ${item.price.toLocaleString()}
                  </small>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleDecrease(id)}
                    >
                      -
                    </Button>
                    <span
                      className="mx-2 fw-bold"
                      style={{ width: "25px", textAlign: "center" }}
                    >
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleIncrease(id)}
                    >
                      +
                    </Button>
                  </div>
                  <strong
                    className="ms-2"
                    style={{ minWidth: "50px", textAlign: "right" }}
                  >
                    ${(item.price * item.quantity).toLocaleString()}
                  </strong>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className="text-gray-600 text-center">
          No tienes ninguna pizza agregada.
        </p>
      )}
      <h3 className="text-lg font-semibold mt-4">
        Total: ${totalPrice.toLocaleString()}
      </h3>
      <div className="d-flex justify-content-between mt-4 w-50">
        <Link to="/">
          <Button variant="secondary" size="sm">
            Volver
          </Button>
        </Link>
        <Button variant="success" size="sm">
          Comprar
        </Button>
      </div>
    </div>
  );
}

export default CartPage;

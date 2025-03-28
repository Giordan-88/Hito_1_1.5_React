import Offcanvas from "react-bootstrap/Offcanvas";
import { Image, ListGroup, Button } from "react-bootstrap";

function Cart({
  show,
  handleClose,
  placement,
  cart,
  onDecrease,
  onIncrease,
  ...props
}) {
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={"end"} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detalles del pedido:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {Object.keys(cart).length > 0 ? (
            <ListGroup>
              {" "}
              {Object.entries(cart).map(([id, item]) => (
                <ListGroup.Item key={id} className="d-flex align-items-center">
                  <Image
                    src={item.image}
                    rounded
                    width={50}
                    height={50}
                    className="me-2"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        ${item.price.toLocaleString()}
                      </small>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => onDecrease(id)}
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
                          onClick={() => onIncrease(id)}
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
            <p className="text-gray-600">No tienes ninguna pizza agregada .</p>
          )
          }
          <h3 className="text-lg font-semibold mt-4">
            Total: ${totalPrice.toLocaleString()}
          </h3>
          <Button variant="success" className="mt-4 w-100">
            Comprar </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;

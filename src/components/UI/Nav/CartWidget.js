import { useState } from "react";
import { Button, Modal, Badge } from "react-bootstrap";
import { ImCart } from "react-icons/im";

const CartWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Cart <ImCart className="me-2" />
        <Badge text="dark" bg="light">
          0
        </Badge>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you don't have products in your cart yet!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartWidget;

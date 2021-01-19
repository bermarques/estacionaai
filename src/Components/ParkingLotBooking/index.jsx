import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useState } from "react";

const ParkingLotBooking = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button varant="primary" onClick={handleShow}>
        Reservar vaga
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard="false"
      >
        <Modal.Header closeButton>
          <Modal.Title>Reservar vaga</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="date" /> até <input type="date" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary">Reservar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ParkingLotBooking;

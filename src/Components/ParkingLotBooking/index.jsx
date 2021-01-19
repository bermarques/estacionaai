import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useState } from "react";

const ParkingLotBooking = () => {
  const [show, setShow] = useState(false);
  const [bookingDays, setBookingDays] = useState({ firstDay: "", lastDay: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFirstDay = (evt) => {
    setBookingDays({ ...bookingDays, firstDay: evt.target.value });
  };

  const handleLastDay = (evt) => {
    setBookingDays({ ...bookingDays, lastDay: evt.target.value });
  };

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
        <div>
          <form>
            <Modal.Body>
              <input type="date" required onChange={handleFirstDay} /> até
              <input type="date" required onChange={handleLastDay} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary">Reservar</Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ParkingLotBooking;

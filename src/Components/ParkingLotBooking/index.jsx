import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import axios from "axios";

const ParkingLotBooking = ({ data, token }) => {
  const [show, setShow] = useState(false);
  const [bookingDays, setBookingDays] = useState({
    firstDay: "",
    lastDay: "",
    parkingLotId: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFirstDay = (evt) => {
    setBookingDays({
      ...bookingDays,
      firstDay: evt.target.value,
      parkingLotId: data.data,
    });
    console.log(bookingDays);
  };

  const handleLastDay = (evt) => {
    setBookingDays({ ...bookingDays, lastDay: evt.target.value });
  };

  const bookLot = (evt) => {
    evt.preventDefault();
    const BaseURL = `https://server-estaciona-ai.herokuapp.com/reservar`;

    const headers = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .post(BaseURL, bookingDays, headers)
      .then((res) => console.log(res))
      .catch((error) => error.response.data);
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
          <form onSubmit={bookLot}>
            <Modal.Body>
              <input type="date" required onChange={handleFirstDay} /> até
              <input type="date" required onChange={handleLastDay} />
              <div>
                <p>
                  Telefone: {data.phone ? data.phone : "Telefone não informado"}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary" type="submit">
                Reservar
              </Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ParkingLotBooking;

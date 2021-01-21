import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Blur } from "./style";

import { useState } from "react";
import axios from "axios";

const ParkingLotBooking = ({ show, setShow, data, token }) => {
  const [bookingDays, setBookingDays] = useState({
    firstDay: "",
    lastDay: "",
    parkingLotId: "",
    userId: data.id,
    Owner: data.userId,
  });
  const [isReadable, setReadability] = useState(false);

  const handleClose = () => setShow(false);

  const handleFirstDay = (evt) => {
    setBookingDays({
      ...bookingDays,
      firstDay: evt.target.value,
    });
  };

  const handleLastDay = (evt) => {
    setBookingDays({
      ...bookingDays,
      lastDay: evt.target.value,
      parkingLotId: data.id,
    });
  };

  const bookLot = (evt) => {
    evt.preventDefault();

    const BaseURL = `https://server-estaciona-ai.herokuapp.com/reservar`;
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .post(BaseURL, bookingDays, headers)
      .catch((error) => error.response.data);

    setReadability(true);
  };

  return (
    <>
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
                  Telefone:{" "}
                  {isReadable ? (
                    data.phone ? (
                      data.phone
                    ) : (
                      "Telefone não informado"
                    )
                  ) : (
                    <Blur>00 00000000</Blur>
                  )}
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

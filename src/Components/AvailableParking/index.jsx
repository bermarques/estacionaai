import ParkingLotBooking from "../ParkingLotBooking";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { StyledCard } from "./style";
import { Card, Button } from "react-bootstrap";

const AvailableParkingComponents = ({ elmt, isMyParking }) => {
  const [show, setShow] = useState(false);

  const [cookies] = useCookies();

  return (
    <>
      <StyledCard isMyParking>
        <Card.Img variant="top" src={elmt.image} />
        <Card.Body>
          <Card.Title>{elmt.city}</Card.Title>
          <Card.Subtitle>
            {(elmt.daily && "Locação Diária") ||
              (elmt.weekly && "Locação Semanal") ||
              (elmt.monthly && "Locação Mensal ")}
          </Card.Subtitle>
          <Card.Text>Valor:R$ {elmt.price} </Card.Text>
          {!isMyParking ? (
            <div className="buttons">
              <Button onClick={() => setShow(true)}>Reservar</Button>
            </div>
          ) : (
            <div className="buttons">
              <Button onClick={() => setShow(true)}>Remover</Button>
            </div>
          )}
        </Card.Body>
      </StyledCard>

      <ParkingLotBooking
        show={show}
        setShow={setShow}
        data={elmt}
        token={cookies.token}
      />
    </>
  );
};

export default AvailableParkingComponents;

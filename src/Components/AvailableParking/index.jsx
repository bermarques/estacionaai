import ParkingLotBooking from "../ParkingLotBooking";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { StyledCard } from "./style";
import { Card, Button } from "react-bootstrap";
import { deleteAddress, getAddress } from "../../requests/requestAdress";

const AvailableParkingComponents = ({ elmt, isMyParking, setMyParkings }) => {
  const [show, setShow] = useState(false);

  const [cookies] = useCookies();

  const handleRemove = async () => {
    let res = await deleteAddress(elmt.id, cookies.token);
    let newParkings = await getAddress(cookies.token);
    newParkings = newParkings.data.filter((park) => park.userId === cookies.ID);
    res.status === 200 && setMyParkings(newParkings);
  };

  return (
    <>
      <StyledCard isMyParking={isMyParking}>
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
              <Button onClick={handleRemove}>Remover</Button>
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

import {
  ParkingCard,
  CardLabel,
  CardDescription,
  MasterDiv,
  StyleStar,
  CardAvaliation,
  StyledInput,
  StyledSelect,
  StyledLabel,
} from "../../Style/globalStyles";
import ParkingLotBooking from "../ParkingLotBooking";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLoading } from "../../Store/modules/loading/actions";
import { StyledCard } from "./style";
import { Card, Button } from "react-bootstrap";

const AvailableParkingComponents = () => {
  const [city, setCity] = useState("");
  const [selectedState, setSelectedStates] = useState("");
  const [cookies] = useCookies();
  const [parking, setParking] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLoading(true));
    getAddress(cookies.token)
      .then((res) => {
        setParking(res.data);
      })
      .then(parking !== [] && dispatch(changeLoading(false)));
  }, []);

  console.log(parking);
  return parking?.map((elmt, idx) => (
    <StyledCard key={idx}>
      <Card.Img variant="top" src={elmt.image} />
      <Card.Body>
        <Card.Title>{elmt.city}</Card.Title>
        <Card.Subtitle>
          {(elmt.daily && "Locação Diária") ||
            (elmt.weekly && "Locação Semanal") ||
            (elmt.monthly && "Locação Mensal ")}
        </Card.Subtitle>
        <Card.Text>Valor: {elmt.price} R$</Card.Text>
        <div className="buttons">
          <Button variant="primary">Go somewhere</Button>
          <Card.Link>Mais Informações</Card.Link>
        </div>
      </Card.Body>
    </StyledCard>
  ));
};

export default AvailableParkingComponents;

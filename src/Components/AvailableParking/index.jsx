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
import { States } from "../../Helpers/Available/index";
import { useDispatch } from "react-redux";
import { changeLoading } from "../../Store/modules/loading/actions";

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

  return parking?.map((elmt, idx) => (
    /*
    <div>
    <StyledInput
      placeholder="Buscar por cidade"
      onChange={(e) => setCity(e.target.value)}
    />
    <StyledSelect onChange={(e) => setSelectedStates(e.target.value)}>
      {States.map(({ value, name }, index) => (
        <option key={index} value={value}>
          {name}
        </option>
      ))}
    </StyledSelect>
    </div>
    */
    <MasterDiv key={idx}>
      <ParkingCard>
        <img src={elmt.image} alt="Vaga" />
      </ParkingCard>
      <CardLabel>{elmt.city}</CardLabel>
      <CardDescription>
        {(elmt.daily && "Locação Diária") ||
          (elmt.weekly && "Locação Semanal") ||
          (elmt.monthly && "Locação Mensal ")}
      </CardDescription>
      <CardDescription> {elmt.price} - R$</CardDescription>
      <ParkingLotBooking data={parking[idx]} token={cookies.token} />
    </MasterDiv>
  ));
};

export default AvailableParkingComponents;

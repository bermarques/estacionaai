import {
  ParkingCard,
  CardLabel,
  CardDescription,
  MasterDiv,
} from "../../Style/globalStyles";
import ParkingLotBooking from "../ParkingLotBooking";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

const AvailableParkingComponents = () => {
  const [cookies] = useCookies();
  const [parking, setParking] = useState([]);

  useEffect(() => {
    getAddress(cookies.token).then((res) => {
      setParking(res.data);
    });
  }, []);

  return parking?.map((elmt, idx) => (
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

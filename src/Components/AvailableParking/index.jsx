import {
  ParkingCard,
  CardLabel,
  CardDescription,
  MasterDiv,
  StyleStar,
  CardAvaliation,
} from "../../Style/globalStyles";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useEffect } from "react";

const AvailableParkingComponents = () => {
  const [cookies] = useCookies();
  const [parking, setParking] = useState([]);

  useEffect(async () => {
    const data = await getAddress(cookies.token);
    setParking(data.data);
  }, []);

  console.log(parking);
  return parking?.map((elmt) => (
    <MasterDiv>
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
    </MasterDiv>
  ));
};

export default AvailableParkingComponents;

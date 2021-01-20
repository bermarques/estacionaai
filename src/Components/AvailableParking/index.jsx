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
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { States } from "../../Helpers/Available/index";

const AvailableParkingComponents = () => {
  const [city, setCity] = useState("");
  const [selectedState, setSelectedStates] = useState("");
  const [cookies] = useCookies();
  const [parking, setParking] = useState([]);

  useEffect(async () => {
    const data = await getAddress(cookies.token);
    setParking(data.data);
  }, []);

  console.log(parking);
  return (
    //parking?.map((elmt) => (

    <MasterDiv>
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
      <ParkingCard>
        <img
          src="http://www.acidadevotuporanga.com.br/Images/Noticia/Grande/00000000351092886541270066537.jpg"
          alt="Vaga"
        />
      </ParkingCard>
      <CardLabel>Curitiba</CardLabel>
      <CardDescription> 1 Vaga - Mensal</CardDescription>
      <CardDescription> R$ 200,00</CardDescription>
      <CardAvaliation>
        5<StyleStar />
      </CardAvaliation>
    </MasterDiv>
  );
  // ));
};

export default AvailableParkingComponents;

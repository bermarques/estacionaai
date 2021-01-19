import {
  ParkingCard,
  CardLabel,
  CardDescription,
  MasterDiv,
  StyleStar,
  CardAvaliation,
} from "../../Style/globalStyles";
import ParkingLotBooking from "../ParkingLotBooking";

const AvailableParkingComponents = () => {
  return (
    <MasterDiv>
      <ParkingCard />
      <CardLabel>Curitiba</CardLabel>
      <CardDescription> 1 Vaga - Mensal</CardDescription>
      <CardDescription> R$ 200,00</CardDescription>
      <CardAvaliation>
        5<StyleStar />
      </CardAvaliation>
      <ParkingLotBooking />
    </MasterDiv>
  );
};

export default AvailableParkingComponents;

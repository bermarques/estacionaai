import {
  ParkingCard,
  CardLabel,
  CardDescription,
  MasterDiv,
  StyleStar,
  CardAvaliation,
} from "../../Style/globalStyles";

const AvailableParkingComponents = () => {
  return (
    <MasterDiv>
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
};

export default AvailableParkingComponents;

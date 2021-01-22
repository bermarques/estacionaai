import AvailableParking from "../../Components/AvailableParking";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Container } from "./style";

const MyParking = () => {
  const [cookies] = useCookies();
  const [myParkings, setMyParkings] = useState([]);

  useEffect(async () => {
    let data = await getAddress(cookies.token);
    data = data.data.filter((park) => park.userId === cookies.ID);
    setMyParkings(data);
  }, []);

  return (
    <Container>
      {myParkings?.map((elmt, idx) => (
        <AvailableParking isMyParking elmt={elmt} key={idx} />
      ))}
    </Container>
  );
};

export default MyParking;

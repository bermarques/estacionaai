import ParkingLotBooking from "../ParkingLotBooking";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading } from "../../Store/modules/loading/actions";
import { StyledCard, MapContainer } from "./style";
import { Card, Button } from "react-bootstrap";
import Map from "../Maps";
import axios from "axios";

const AvailableParkingComponents = () => {
  const [show, setShow] = useState(false);
  const [showMore, setShowMore] = useState(false);
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

  // const getLocation = () => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=curitiba&key=AIzaSyBH91yJj8VsDEmzhghkeXYpTIneKTxVlK4`
  //     )
  //     .then((res) => console.log(res));
  // };

  // getLocation();

  console.log(parking);
  return parking?.map((elmt, idx) => (
    <>
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
          <MapContainer show={showMore}>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ width: "100%", height: `200px` }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapContainer>
          <div className="buttons">
            <Button variant="primary" onClick={() => setShow(true)}>
              Reservar
            </Button>
            <Card.Link onClick={() => setShowMore(!showMore)}>
              Mais Informações
            </Card.Link>
          </div>
        </Card.Body>
      </StyledCard>
      <ParkingLotBooking
        show={show}
        setShow={setShow}
        data={elmt}
        token={cookies.token}
      />
    </>
  ));
};

export default AvailableParkingComponents;

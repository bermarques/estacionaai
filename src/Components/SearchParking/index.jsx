import ParkingLotBooking from "../ParkingLotBooking";
import { getAddress } from "../../requests/requestAdress";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading } from "../../Store/modules/loading/actions";
import { StyledCard, MapContainer } from "../AvailableParking/style";
import { Card, Button } from "react-bootstrap";
import { StyledLabel } from "../../Style/globalStyles";
import Map from "../Maps";
import axios from "axios";

const SearchParking = ({ cityes }) => {
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

  return (
    <>
      <div>
        {parking
          .filter((citys) => citys.city === cityes)
          .map(({ city, image, daily, weekly, monthly, price }, index) => (
            <StyledCard key={index}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{city}</Card.Title>
                <Card.Subtitle>
                  {(daily && "Locação Diária") ||
                    (weekly && "Locação Semanal") ||
                    (monthly && "Locação Mensal ")}
                </Card.Subtitle>
                <Card.Text>Valor: {price} R$</Card.Text>
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
          ))}
        <ParkingLotBooking
          show={show}
          setShow={setShow}
          data={parking}
          token={cookies.token}
        />
      </div>
    </>
  );
};

export default SearchParking;

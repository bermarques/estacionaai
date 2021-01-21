import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -25.43598823988654, lng: -49.3085856 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: -25.43598823988654, lng: -49.3085856 }} />
      )}
    </GoogleMap>
  ))
);

export default MyMap;

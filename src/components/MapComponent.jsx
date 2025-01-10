import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { fetchCoordinates } from "../utils/helper";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const defaultCenter = { lat: 28.4595, lng: 77.0266 };

const MapComponent = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      if (address) {
        const coords = await fetchCoordinates(address);
        if (coords) {
          setCoordinates(coords);
        }
      }
    };
    getCoordinates();
  }, [address]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={coordinates || defaultCenter}
        zoom={15}
        options={{
          gestureHandling: "greedy",
        }}
      >
        {coordinates && <Marker position={coordinates} label={address} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

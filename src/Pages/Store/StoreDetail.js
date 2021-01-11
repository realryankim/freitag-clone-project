import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import StoreData from "./StoreData";
import Header from "../../Components/Header/Header";
import googleMapStyles from "./GoogleMapStyle";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { ImLocation } from "react-icons/im";
import { RiShareBoxLine } from "react-icons/ri";
import { BiTimeFive, BiBuildingHouse } from "react-icons/bi";
import { LocationOn } from "@styled-icons/material";

function StoreDetail({ google }) {
  const match = useParams();
  const storeId = match.id;
  const { lat, lng, store_name, img2 } = StoreData.data[storeId - 1];
  const mapStyles = googleMapStyles.mapStyle;

  return (
    <main>
      <Header />
      <StoreImg src={img2} />
      <StoreInfo>
        <h1>{store_name.toUpperCase()}</h1>
        <span>F-DEALER</span>
        <DetailInfo></DetailInfo>

        <MapContainer>
          <Map
            containerStyle={mapStyle}
            google={google}
            styles={mapStyles}
            zoom={10}
            initialCenter={{ lat, lng }}
          >
            <Marker
              title={store_name}
              name={store_name}
              position={{ lat, lng }}
              icon={{
                url:
                  "https://www.freitag.ch/sites/default/files/storeicons/store_icons_rz1-04.svg",
                scaledSize: new google.maps.Size(30, 30),
              }}
            />
          </Map>
        </MapContainer>
      </StoreInfo>
    </main>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdE2uSDk3jTTw1Y_czrc592Hc2_cLevc8",
})(StoreDetail);

const mapStyle = {
  width: "1130px",
  height: "400px",
  left: "0px",
  top: "0px",
};

const MapContainer = styled.div`
  position: relative;
  width: 1130px;
  height: 450px;
`;

const DetailInfo = styled.div``;

const StoreInfo = styled.div`
  width: 1170px;
  padding: 0 20px;
  margin: 0 auto;
  h1 {
    padding-top: 30px;
    font-size: 60px;
  }
  span {
    color: black;
    font-size: 17px;
    line-height: 1.5;
    font-weight: 400;
  }
`;

const StoreImg = styled.img`
  width: 100%;
  height: 800px;
  object-fit: cover;
`;

const ICONS = {
  "OPENING TIMES": <BiTimeFive size="28" />,
  CONTACTS: <ImLocation size="28" />,
  "EXTRA SERVICES": <LocationOn size="28" />,
  "SOCIAL MEDIA": <RiShareBoxLine size="28" />,
  STORE: <BiBuildingHouse size="30" />,
};

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import Header from "../../Components/Header/Header";
import StoreCard from "./StoreCard";
import StoreData from "./StoreData";
import StoreFilter from "./StoreFilter";
import googleMapStyles from "./GoogleMapStyle";

function Store({ google }) {
  const { mapStyle } = googleMapStyles;
  const STORES = StoreData.data;
  const [stores, setStores] = useState(StoreData.data);
  const [filterCountry, setFilterCountry] = useState({});
  const [filterCity, setFilterCity] = useState({});
  const [activeFilter, setActiveFilter] = useState(0);
  const scaledSize = new google.maps.Size(30, 30);
  const url =
    "https://www.freitag.ch/sites/default/files/storeicons/store_icons_rz1-04.svg";

  const filterStores = (selected) => {
    const filtered = STORES.filter((el) => el.country === selected);
    selected.length ? setStores(filtered) : setStores(STORES);
  };

  useEffect(() => {
    const countryCount = STORES.map((el) => el.country);
    const cityCount = STORES.map((el) => el.city);

    setFilterCountry(
      countryCount.reduce((acc, el) => {
        acc.hasOwnProperty(el) ? acc[el]++ : (acc[el] = 1);
        return acc;
      }, {})
    );
    setFilterCity(
      cityCount.reduce((acc, el) => {
        acc.hasOwnProperty(el) ? acc[el]++ : (acc[el] = 1);
        return acc;
      }, {})
    );
  }, [STORES]);

  return (
    <div>
      <Header />

      <Section>
        <Title>HERE THE F******!</Title>
        <Description>
          FREITAG is everywhere – find us here. Whether you prefer to stay on
          your home turf or you’re looking for something specific, our search
          will deliver: filter geographically, for specific offers or services
          such as bags, accessories, clothes or repairs, or by FREITAG-only
          stores vs. mixed stores.
        </Description>
        <FilterSection>
          <StoreFilter
            filterStores={filterStores}
            setActiveFilter={setActiveFilter}
            index={1}
            active={activeFilter}
            filterData={filterCountry}
            title="Country/Region"
          />
          <StoreFilter
            setActiveFilter={setActiveFilter}
            index={2}
            active={activeFilter}
            filterData={filterCity}
            title="All Cities"
          />
          <StoreFilter
            setActiveFilter={setActiveFilter}
            index={3}
            active={activeFilter}
            filterData={filterCountry}
            title={"All Stores"}
          />
          <StoreFilter
            setActiveFilter={setActiveFilter}
            index={4}
            active={activeFilter}
            filterData={filterCity}
            title={"All Services"}
          />
        </FilterSection>
        <MapContainer>
          <Map
            containerStyle={mapStyles}
            google={google}
            styles={mapStyle}
            zoom={2}
            initialCenter={{ lat: "37.500877", lng: "127.025785" }}
          >
            {stores.map((store) => (
              <Marker
                key={store.id}
                title={store.store_name}
                name={store.store_name}
                position={{ lat: store.lat, lng: store.lng }}
                icon={{
                  scaledSize,
                  url,
                }}
              />
            ))}
          </Map>
        </MapContainer>

        <Description>
          Most of our FREITAG stores have now reopened, and our store crews are
          looking forward to your visit. We’ve taken the necessary protective
          measures for you to enjoy a safe shopping experience with us. <br />
          <br />
          By the way, it’s still business as usual for our{" "}
          <span>online store</span>. We look forward to your order!
        </Description>
        <Empty />
        <Title>FIND US HERE</Title>
        <Description>{stores.length} stores</Description>

        <List>
          {stores.slice(0, 16).map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </List>
      </Section>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdE2uSDk3jTTw1Y_czrc592Hc2_cLevc8",
})(Store);

const mapStyles = {
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

const Empty = styled.div`
  width: 1130px;
  height: 70px;
`;

const Section = styled.section`
  width: 1170px;
  padding: 100px 20px 0px 20px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 30px;
  font-weight: 600;
`;

const Description = styled.p`
  display: block;
  width: 730px;
  margin-bottom: 20px;
  font-size: 19px;
  line-height: 1.5;
  span {
    background: #adc088;
    &:hover {
      background: black;
      color: white;
    }
  }
`;

const List = styled.div`
  ${({ theme }) => theme.flex("space-between", "flex-start", "")}
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 100px;
  width: 1130px;
`;

const FilterSection = styled.section`
  ${({ theme }) => theme.flex("space-between", "flex-start", "")}
  padding-top: 50px;
  padding-bottom: 20px;
`;

import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function StoreCard({ store }) {
  const history = useHistory();
  return (
    <Article onClick={() => history.push(`/StoreDetail/${store.id}`)}>
      <StoreImg src={store.img} />
      <div>
        <img
          alt="F-Dealer"
          src="https://www.freitag.ch/sites/default/files/storeicons/store_icons_rz1-04.svg"
        />
        <span>F-Dealer</span>
      </div>
      <h4>{store.store_name.toUpperCase()}</h4>
      <h5>{store.address}</h5>
      <h5>{store.city}</h5>
      <h5>{store.country}</h5>
    </Article>
  );
}

export default StoreCard;

const Article = styled.article`
  width: 265px;
  margin-bottom: 40px;
  h4 {
    margin: 4px 0;
    font-size: 16px;
    font-weight: 500;
  }
  h5 {
    font-size: 16px;
    font-weight: 400;
  }
  div {
    img {
      width: 14px;
      height: auto;
    }
    span {
      margin: 5px 0 5px 5px;
      color: #666;
      font-size: 19px;
      line-height: 1.5;
    }
  }
`;

const StoreImg = styled.img`
  width: 265px;
  height: 95px;
  object-fit: cover;
`;

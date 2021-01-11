import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Card({ id, productUrl, productTitle }) {
  const history = useHistory();
  return (
    <CardImage onClick={() => history.push(`/product/${id}`)}>
      <ViewsImg src={productUrl} alt={productTitle} />
    </CardImage>
  );
}

export default Card;

const CardImage = styled.a`
  width: 25%;
  padding: 5px 10px 5px 0;
`;

const ViewsImg = styled.img`
  max-width: 100%;
  vertical-align: bottom;
  cursor: pointer;
`;

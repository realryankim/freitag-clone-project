import React from "react";
import Card from "./Card";
import styled from "styled-components";

function List({ productId, productTitle, productPrice, productSub }) {
  return (
    <ListContainer>
      <ListDescription>
        <ListTitle>
          <a href="#/">{productTitle}</a>
        </ListTitle>
        <ListInfo>
          <h3>FEMALE SCOOP NECK,&nbsp;</h3>
          <span>￦{productPrice}</span>
        </ListInfo>
      </ListDescription>
      <CardContainer>
        <StoreApparelList>
          <ViewsField>
            {productSub.map(el => (
              <Card
                // productColor={el.color}
                productTitle={el.seriesName}
                productUrl={`https://ifh.cc/g/${el.mainImage.split("-")[1]}`}
                id={el.id}
              />
            ))}
          </ViewsField>
        </StoreApparelList>
      </CardContainer>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.main`
  text-transform: uppercase;
  font-weight: bold;
`;

const ListDescription = styled.section`
  margin-top: 50px;
`;

const ListTitle = styled.h2`
  font-size: 40px;

  a:hover {
    background-color: black;
    color: white;
  }
`;

const ListInfo = styled.article`
  display: flex;
  align-items: center;
  padding: 2px 0 4px;
  font-size: 22px;
  font-weight: bold;

  span {
    line-height: 1;
  }
`;

const CardContainer = styled.article`
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
`;

const StoreApparelList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ViewsField = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-right: -4px;
  padding-right: 10px;
`;

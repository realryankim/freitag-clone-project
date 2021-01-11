import React from "react";
import SelectColor from "./SelectColor";
import DropDown from "./DropDown";
import Cart from "./Cart";
import styled from "styled-components";

function DetailRight({ allItem, url, items, selected }) {
  return (
    <RightBox>
      <Header>
        <h3>{allItem[0]?.name}</h3>
        <span>
          {allItem[0]?.description}, ￦{allItem[0]?.price}
        </span>
      </Header>
      <SelectColor
        selected={selected}
        allItem={allItem}
        url={url}
        items={items}
      />
      <DropDown size={allItem[0]?.size} />
      <Cart allItem={allItem} />
    </RightBox>
  );
}

export default DetailRight;

const RightBox = styled.section`
  width: 60%;
  padding: 60px 10px 10px 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 28px;

  span {
    font-weight: 300;
    font-size: 16px;
  }
`;

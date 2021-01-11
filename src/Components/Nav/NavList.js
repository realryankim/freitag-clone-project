import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import SubCategory from "./SubCategory";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";
import { MessageDetail } from "@styled-icons/boxicons-solid/MessageDetail";
import { Heart } from "@styled-icons/octicons/Heart";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";
import { ShoppingCart, LocationCity } from "@styled-icons/material";

export default function NavList({ category, index }) {
  const [navActive, setNavActive] = useState(false);

  return (
    <div>
      <TopCategory
        navActive={navActive}
        onClick={() => setNavActive(!navActive)}
        key={category.id}
      >
        {NAV_ICONS[index]}
        <h3>{category.category}</h3>
        {category.subcategory && (
          <span>
            <ArrowDropDown size="35" />
          </span>
        )}
      </TopCategory>
      {navActive &&
        category.subcategory?.map(list =>
          category.category === "SHOP" ? (
            <DropDown key={list.id} subcategory={list} />
          ) : (
            <SubCategory key={list.id} subcategory={list} />
          )
        )}
    </div>
  );
}

const TopCategory = styled.div`
  ${({ theme }) => theme.flex("flex-start", "center", "")}
  position: relative;
  width: 299px;
  height: 60px;
  padding: 15px;
  border-top: solid 1px #ececec;
  cursor: pointer;

  &:hover {
    color: gray;
    span {
      color: black;
    }
  }

  h3 {
    margin-left: 10px;
    font-size: 21px;
  }

  span {
    position: absolute;
    right: 15px;
    ${({ navActive }) =>
      navActive &&
      `
    transform: rotate(180deg);
    `}
  }
`;

const NAV_ICONS = {
  0: <ShoppingCart size="23" />,
  1: <MessageDetail size="23" />,
  2: <LocationCity size="24" />,
  3: <Heart size="23" />,
  4: <InfoCircle size="23" />,
};

import React, { useState } from "react";
import styled from "styled-components";
import SubCategory from "./SubCategory";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";

export default function DropDown({ subcategory }) {
  const [navActive, setNavActive] = useState(false);

  return (
    <SubMenu>
      <SubTitle
        navActive={navActive}
        onClick={() => setNavActive(!navActive)}
        key={subcategory.id}
      >
        <h4>{subcategory.title}</h4>
        {subcategory.options && (
          <span>
            <ArrowDropDown size="35" />
          </span>
        )}
      </SubTitle>
      {navActive &&
        subcategory.options?.map((list) => (
          <SubCategory key={list.id} subcategory={list} />
        ))}
    </SubMenu>
  );
}

const SubMenu = styled.div`
  width: 299px;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "")}
  position: relative;
  width: 299px;
  height: 47px;
  padding: 15px;
  border-top: solid 1px #ececec;
  cursor: pointer;
  &:hover {
    h4 {
      color: gray;
    }
  }

  h4 {
    font-size: 15px;
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

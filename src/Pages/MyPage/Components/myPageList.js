import React, { useState } from "react";
import styled, { css } from "styled-components";
import Addresses from "./Component/addresses";
import NewLetter from "./Component/newsLetter";
import Orders from "./Component/orders";
import Swap from "./Component/swap";
import UserNamePw from "./Component/userNamePw";
import { ArrowDownShort } from "@styled-icons/bootstrap/ArrowDownShort";

function MyPageList(props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <CategoryList onClick={() => setDropdown(!dropdown)}>
        {props.el.name}
        <Rotate dropdown={dropdown}>
          <ArrowDownShort width="20px" />
        </Rotate>
      </CategoryList>
      {dropdown && DROP_DOWN_LIST[props.el.id]}
    </>
  );
}

export default MyPageList;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const CategoryList = styled.div`
  margin: 17px 0;
  padding-top: 20px;
  font-size: 17px;
  font-weight: 600;
  border-top: 1px solid #000;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
  flex-direction: colume;
`;

const Rotate = styled.span`
  ${({ dropdown }) =>
    dropdown &&
    `
  transform: rotate(180deg);
  `};
`;

const DROP_DOWN_LIST = {
  1: <NewLetter />,
  2: <UserNamePw />,
  3: <Addresses />,
  4: <Orders />,
  5: <Swap />,
};

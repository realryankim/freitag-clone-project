import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";
import { BellRing } from "@styled-icons/boxicons-solid/BellRing";

export default function Header({ openFilter, filterHandler, removeAllItems }) {
  const [isNav, setIsNav] = useState(false);
  const [isFilter, setIsFilter] = useState(true);
  useEffect(() => {
    setIsFilter(!isFilter);
  }, []);

  return (
    <Main>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <IconBox menu onClick={() => setIsNav(!isNav)} isNav={isNav}>
          <MenuOutline size="24" />
        </IconBox>
        <Link to="/Cart">
          <IconBoxCart>
            <ShoppingCart size="22" />
          </IconBoxCart>
        </Link>
        <IconBox onClick={() => setIsFilter(!isFilter)}>
          <BellRing size="18" color="white" />
        </IconBox>
      </HeaderContainer>
      {isNav && <Nav />}
      {/* {isFilter && (
        <Filter filterHandler={filterHandler} removeAllItems={removeAllItems} />
      )} */}
    </Main>
  );
}

const Main = styled.main`
  position: fixed;
  z-index: 1000;
`;

const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  width: 300px;
  height: 50px;
  z-index: 1000;
`;

const IconBox = styled.div`
  ${({ theme }) => theme.flex("center", "center", "")}
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isNav ? "white" : "#666")};
  color: ${(props) => (props.isNav ? "black" : "white")};
  &:hover {
    cursor: pointer;
  }
  span {
    color: white;
    font-size: 13px;
    font-weight: 500;
  }
`;

const IconBoxCart = styled.div`
  ${({ theme }) => theme.flex("center", "center", "")}
  width: 50px;
  height: 50px;
  background-color: #666;
  color: white;
  &:hover {
    cursor: pointer;
  }
  span {
    color: white;
    font-size: 13px;
    font-weight: 500;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  background: url("/Image/kneetag_logo.png") no-repeat center center;
  background-size: 100% 100%;
  &:hover {
    cursor: pointer;
  }
`;

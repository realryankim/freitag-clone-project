import React, { useState } from "react";
import styled from "styled-components";
import { MdFilterCenterFocus } from "react-icons/md";

function Title({ productCategory, categoryName, toggleFilter }) {
  const [isFilter, setIsFilter] = useState(false);

  return (
    <HeaderContainer>
      <HeaderTopLeft>
        <span>
          <a href="#/" alt="hi">
            Store
          </a>
        </span>
        <span> » </span>
        <span>
          <a href="#/" alt="hi">
            {productCategory}
          </a>
        </span>
      </HeaderTopLeft>
      <HeaderLeftRight>
        <HeaderLeft>{categoryName}</HeaderLeft>
        <HeaderRight
          onClick={() => {
            setIsFilter(!isFilter);
            toggleFilter(isFilter);
          }}
        >
          <MdFilterCenterFocus size="17" />
          Filters
        </HeaderRight>
      </HeaderLeftRight>
    </HeaderContainer>
  );
}

export default Title;

const HeaderContainer = styled.header`
  padding-top: 100px;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderTopLeft = styled.div`
  font-size: 14px;

  a:hover {
    color: gray;
    span {
      color: black;
    }
  }

  span:nth-child(2) {
    font-size: 20px;
  }
`;

const HeaderLeftRight = styled.div`
  display: flex;
  position: relative;
`;

const HeaderLeft = styled.h1`
  margin: 1rem 0;
  font-size: 60px;
`;

const HeaderRight = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  margin-top: 80px;
  text-transform: none;
  font-size: 15px;
  cursor: pointer;
`;

import React, { useState, useEffect } from "react";
import PrimaryColor from "../Filter/PrimaryColor";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";
import { MdPalette, MdCancel } from "react-icons/md";

export default function Filter({ filterHandler, removeAllItems }) {
  const [navActive, setNavActive] = useState(false);
  const [count, setCount] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/Data/ProductData.json");
    const { product } = await response.json();
    const colorFilter = product[0].sub.map((el) => el.color);

    const colorCount = colorFilter.reduce((acc, el) => {
      Object.keys(acc).includes(el) ? acc[el]++ : (acc[el] = 1);
      return acc;
    }, {});

    const arr = [];
    for (const [key, value] of Object.entries(colorCount)) {
      const NewObject = {};
      NewObject[key] = value;
      arr.push(NewObject);
    }

    setCount(arr);
  };

  // const reOrderArray = (color, choose) => {
  //   const selectedColor = count.filter(el => Object.keys(el)[0] === color);
  //   const anotherCount = count.filter(el => Object.keys(el)[0] !== color);
  //   if (!choose) {
  //     anotherCount.unshift(selectedColor[0]);
  //     setCount(anotherCount);
  //   } else {
  //     anotherCount.push(selectedColor[0]);
  //     setCount(anotherCount);
  //   }
  // };

  const removeFilter = () => {
    removeAllItems();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavContainer>
      <div>
        <TopCategory
          navActive={navActive}
          onClick={() => setNavActive(!navActive)}
        >
          <MdPalette size="23" />
          <h4>{FILTERCOLOR.category}</h4>
          <span>
            <ArrowDropDown size="35" />
          </span>
        </TopCategory>
        {navActive &&
          count.map((list) => (
            <PrimaryColor
              filterHandler={filterHandler}
              // reOrderArray={reOrderArray}
              key={Object.keys(list)[0]}
              color={Object.keys(list)[0]}
              colorSum={Object.values(list)[0]}
            />
          ))}
      </div>
      <ClearAll>
        <span onClick={() => removeFilter()}> CLEAR ALL</span>
        <MdCancel onClick={() => removeFilter()} size="25" />
        {/* <a href="#/" onClick={() => window.location.reload()}>
          CLEAR ALL
        </a>
        <MdCancel onClick={() => window.location.reload()} size="25" /> */}
      </ClearAll>
    </NavContainer>
  );
}

const FILTERCOLOR = {
  id: 1,
  category: "PRIMARY COLOR",
};

const NavContainer = styled.div`
  width: 300px;
  height: 100vh;
  padding-top: 50px;
  background-color: white;
  border-right: solid 1px #ececec;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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

const ClearAll = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  font-size: 16px;
  border-top: solid 1px #ececec;
`;

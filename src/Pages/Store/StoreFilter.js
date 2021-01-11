import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";

function StoreFilter({
  filterStores,
  setActiveFilter,
  title,
  filterData,
  active,
  index,
}) {
  const filterActive = active === index;
  const [selectedOption, setSelectedOption] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleOption = (el) => {
    setSelectedOption(el);
    setActiveFilter(0);
    filterStores(el);
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  useEffect(() => {
    setSearchResult(
      Object.keys(filterData)
        .filter((el) => el.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((el) => el.toLowerCase())
    );
  }, [filterData, searchFilter]);

  return (
    <FilterContainer filterActive={filterActive}>
      <h3 onClick={() => setActiveFilter(active === index ? 0 : index)}>
        {selectedOption
          ? selectedOption + ` (${filterData[selectedOption]})`
          : title}
      </h3>
      <span>
        <ArrowDropDown size="35" />
      </span>
      <hr />
      {filterActive && (
        <FilterList>
          <input type="search" onChange={(e) => handleSearch(e)} />
          <hr />
          <li onClick={() => handleOption("")}>{title}</li>
          {Object.keys(filterData)
            .sort()
            .filter((el) => searchResult.includes(el.toLowerCase()))
            .map((el) => (
              <li
                onClick={() => handleOption(el)}
                key={el}
              >{`${el} (${filterData[el]})`}</li>
            ))}
        </FilterList>
      )}
    </FilterContainer>
  );
}

export default StoreFilter;

const FilterList = styled.ul`
  min-width: 235px;
  max-height: 200px;
  position: absolute;
  top: 24px;
  background-color: white;
  border: 2px solid black;
  z-index: 1000;
  overflow-y: scroll;
  input {
    width: 100%;
    height: 36px;
    padding: 2px 7px;
    margin: 0 auto;
    outline: none;
    border: hidden;
    font-size: 14px;
  }
  li {
    height: 36px;
    padding: 6px 7px;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: gray;
    }
  }
`;

const FilterContainer = styled.div`
  position: relative;
  width: 265px;
  padding: 0 20px;

  h3 {
    font-size: 19px;
    font-weight: 400;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: -5px;
    right: 15px;

    ${({ filterActive }) =>
      filterActive &&
      `
      transform: rotate(180deg);
    `}
  }

  hr {
    width: 100%;
    margin: 2px 0;
    border: 1px solid black;
  }
`;

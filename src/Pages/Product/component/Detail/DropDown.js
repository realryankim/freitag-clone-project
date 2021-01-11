import React, { useState, useEffect } from "react";
import styled from "styled-components";

function DropDown({ size }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {}, [selectedOption]);

  return (
    <SizeContainer>
      <SizeLabel>Size</SizeLabel>
      <div>
        <SizeSelector onChange={handleChange} name="" id="">
          {size.map((el) => (
            <option value={el}>{el.name}</option>
          ))}
        </SizeSelector>
      </div>
    </SizeContainer>
  );
}

export default DropDown;

const SizeContainer = styled.div`
  margin-bottom: 20px;
`;
const SizeLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const SizeSelector = styled.select`
  height: auto;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #000;
  border-radius: 0;
  background-color: transparent;
  border-radius: 0;
  font-size: 18px;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border-top: none;
    border-right: none;
    border-left: none;
  }
`;

const dropDownOptions = [
  {
    value: "S",
  },
  {
    value: "M",
  },
  {
    value: "L",
  },
  {
    value: "XL",
  },
];

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";

export default function PrimaryColor({
  id,
  color,
  colorSum,
  filterHandler,
  // reOrderArray,
}) {
  const [choose, setChoose] = useState(false);

  const clickHandler = () => {
    filterHandler(color);
    setChoose(!choose);
    // reOrderArray(color, choose);
  };
  return (
    <Color choose={choose} key={id}>
      <h5 onClick={() => clickHandler()}>
        {`${color.toUpperCase()} (${colorSum})`}
      </h5>
      {choose && <MdCancel onClick={() => clickHandler()} size="25" />}
    </Color>
  );
}

const Color = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "")}
  width: 299px;
  height: 38px;
  position: relative;
  padding: 5px 15px;

  h5 {
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
`;

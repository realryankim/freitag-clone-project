import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function SubCategory({ subcategory }) {
  const history = useHistory();

  const linkToList = (e) => {
    e === "T-SHIRTS" && history.push("/Productlist");
  };

  return (
    <SubTitle
      onClick={() => linkToList(subcategory.title)}
      key={subcategory.id}
    >
      <h5>{subcategory.title}</h5>
    </SubTitle>
  );
}

const SubTitle = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "")}
  width: 299px;
  height: 38px;
  position: relative;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    color: gray;
  }

  h5 {
    font-size: 13.5px;
  }
`;

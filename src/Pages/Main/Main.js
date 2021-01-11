import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";

export default function Main() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/Image/mainBackground.jpeg") no-repeat center center;
  background-size: cover;
`;

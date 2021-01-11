import React from "react";
import Info from "./InfoData";
import styled from "styled-components";
import { RiStarFill } from "react-icons/ri";
import { SiSquarespace } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { MdAutorenew } from "react-icons/md";

function ExtraInfo() {
  return (
    <ExtraInfoContainer>
      {Info.map(el => (
        <InnerContainer>
          <div>{ICONS[el.id]}</div>
          <div>
            <InfoTitle>{el.title}</InfoTitle>
          </div>
          <div>
            <InfoDesc>{el.desc}</InfoDesc>
          </div>
        </InnerContainer>
      ))}
    </ExtraInfoContainer>
  );
}

export default ExtraInfo;

const ExtraInfoContainer = styled.section`
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-bottom: 10px;
`;

const InfoTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const InfoDesc = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ICONS = {
  1: <RiStarFill size="30" />,
  2: <SiSquarespace size="28" />,
  3: <ImLocation size="28" />,
  4: <MdAutorenew size="30" />,
};

import React from "react";
import USERBILL from "../UserBill";
import styled from "styled-components";

export default function InfoBill() {
  return (
    <InfoBox>
      {USERBILL.map((userBill) => {
        return (
          <div>
            <label>{userBill.title}</label>
            <input type={userBill.type} name={userBill.name} />
          </div>
        );
      })}
    </InfoBox>
  );
}

const InfoBox = styled.div``;

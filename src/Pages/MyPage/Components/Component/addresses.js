import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Save } from "@styled-icons/boxicons-regular/Save";
import { DownArrowAlt } from "@styled-icons/boxicons-solid/DownArrowAlt";
import { ArrowReturnLeft } from "@styled-icons/bootstrap/ArrowReturnLeft";
import { IndeterminateCheckBox } from "styled-icons/material-twotone";

function Addresses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data/AddressInfo.json")
      .then((res) => res.json())
      .then((list) => {
        setData(list.AddressInfo);
      });
  }, []);

  return (
    <MypageListInfo>
      <Address>
        <AddressInfoHeader>SHIPPING ADDRESS</AddressInfoHeader>
        <AddressInfoList>Country / Region</AddressInfoList>
        <LocateList>
          South Korea
          <DownArrowAlt width="20px" />
        </LocateList>
        {data.map((el, index) => {
          return (
            <>
              <AddressInfoList key={index}>{el.name}</AddressInfoList>
              <Input />
            </>
          );
        })}
        <FormSubmitBtn>
          <Save width="20px" color="white" />
          &nbsp;SAVE CHANGES
        </FormSubmitBtn>
        <InputCancel>
          <ArrowReturnLeft width="20px" />
          &nbsp;CANCEL CHANGES
        </InputCancel>
      </Address>
      <Address>
        <AddressInfoHeader>BILLING ADDRESS</AddressInfoHeader>
        <AddressInfoList>Country / Region</AddressInfoList>
        <LocateList>
          South Korea
          <DownArrowAlt width="20px" />
        </LocateList>
        {data.map((el, index) => {
          return (
            <>
              <AddressInfoList key={index}>{el.name}</AddressInfoList>
              <Input />
            </>
          );
        })}
      </Address>
    </MypageListInfo>
  );
}
export default Addresses;

const MypageListInfo = styled.div`
  display: flex;
  align-content: space-between;
  width: 94%;
  margin-right: -100%;
  margin-left: 0;
`;

const Address = styled.div`
  margin-right: 10%;
  width: 40%;
  font-weight: 500;
`;

const AddressInfoHeader = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
`;

const AddressInfoList = styled.span`
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
`;

const LocateList = styled.div`
  width: 120px;
  margin-bottom: 17px;
  padding-bottom: 3px;
  border-bottom: 2px solid black;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  ${({ theme }) => theme.flex("space-between", "", "")}
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 0 5px 0;
  border: none;
  border-bottom: solid 2px #000;
  &:focus {
    border-bottom: solid 2px #adc088;
    outline: none;
  }
`;

const FormSubmitBtn = styled.button`
  background-color: #000;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: medium none;
  letter-spacing: 0.25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
`;

const InputCancel = styled.button`
  display: block;
  margin-bottom: 50px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: transparent;
`;

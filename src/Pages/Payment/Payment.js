import React from "react";
import Info from "./Component/InfoBill";
import styled from "styled-components";
import { User } from "@styled-icons/fa-solid";
import { Car, CreditCard } from "@styled-icons/evaicons-solid";

export default function Payment() {
  return (
    <PayBox>
      <PayContainer>
        <PayDetail>
          <div>
            <IconInfo />
            <span className="gray">Details</span>
          </div>
          <div>
            <IconShop />
            <span>Shipping</span>
          </div>
          <div>
            <IconPay />
            <span>payment</span>
          </div>
        </PayDetail>
        <FormInput>
          <FormBox>
            <h3>BILLING INFORMATION</h3>
            <InfoBox>
              {/* <InfoSelect /> */}
              <Info />
            </InfoBox>
          </FormBox>
          <FormBox>
            <h3>SHIPPING INFORMATION</h3>
            <InfoSelect>
              <input type="radio" />
              <label name="chkInfo">same as Billing Information</label>
              <input type="radio" />
              <label name="chkInfo">Different Shipping Information</label>
            </InfoSelect>
            <InfoBox>
              <Info />
            </InfoBox>
          </FormBox>
        </FormInput>

        <CartBottom>
          <Back>← BACK TO SHOPPING CART</Back>
          <CartBtn>
            <IconShop />
            <span>CONTINUE CHECKOUT</span>
          </CartBtn>
        </CartBottom>
      </PayContainer>
    </PayBox>
  );
}

const PayBox = styled.section`
  margin-top: 100px;
`;

const PayContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 1170px;
`;

const PayDetail = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-bottom: 32px;
    span {
      margin-left: 4px;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      &.gray {
        color: gray;
      }
    }
  }
`;

const FormInput = styled.form``;

const IconInfo = styled(User)`
  width: 16px;
  color: gray;
`;

const IconShop = styled(Car)`
  width: 24px;
`;

const IconPay = styled(CreditCard)`
  width: 24px;
`;

const FormBox = styled.div`
  margin-bottom: 48px;
  h3 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
  }
`;

const InfoBox = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    div {
      flex-direction: column;
      width: 240px;
      margin: 8px 24px 8px 0;
    }
  }
  label {
    display: block;
    color: #000;
    font-weight: bold;
    font-size: 13px;
  }
  input {
    padding: 0 0 5px 0;
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #000;
  }
`;

const InfoSelect = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  label {
    margin-left: 4px;
    margin-right: 16px;
    font-size: 16px;
  }
`;

const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Back = styled.p`
  font-size: 16px;
  cursor: pointer;
`;

const CartBtn = styled.button`
  padding: 12px 24px;
  margin-right: 100px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

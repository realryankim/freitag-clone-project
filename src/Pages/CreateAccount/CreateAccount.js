import React, { useState } from "react";
import styled from "styled-components";
import MyPage from "../MyPage/MyPage";
import InputField from "./Components/inputField";
import Header from "../../Components/Header/Header";

function CreateAccount() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Header />
      <Main>
        <CreateAccountContainer>
          <Top>
            <General>
              <p>General *</p>
            </General>
          </Top>
          {!isSubmitted ? <InputField submitForm={submitForm} /> : <MyPage />}
        </CreateAccountContainer>
      </Main>
    </>
  );
}

export default CreateAccount;

const Main = styled.main`
  padding-top: 100px;
`;

const CreateAccountContainer = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  border: 1px solid #dedede;
`;

const Top = styled.header`
  width: 100%;
  height: 45px;
  background-color: #dedede;
`;

const General = styled.div`
  width: 105px;
  height: 100%;
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  background-color: #adc088;
  ${({ theme }) => theme.flex("center", "center", "")}
`;

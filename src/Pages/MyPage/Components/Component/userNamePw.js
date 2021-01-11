import React from "react";
import styled from "styled-components";
import { DownArrowAlt } from "@styled-icons/boxicons-solid/DownArrowAlt";
import { ArrowReturnLeft } from "@styled-icons/bootstrap/ArrowReturnLeft";
import { Save } from "@styled-icons/boxicons-regular/Save";
import loginUseForm from "./loginUseForm";
import loginValidate from "./loginValidateInfo";

function UserNamePw() {
  const {
    handleSubmit,
    handleChange,
    onReset,
    values,
    errors,
    valuesInput,
    message,
  } = loginUseForm(loginValidate);

  return (
    <MypageListInfo onSubmit={handleSubmit}>
      <form>
        {message === "SUCCESS" && (
          <SuccsssMessage>
            Your user profile has succssfully been updated !
          </SuccsssMessage>
        )}
        <Label>E-mail</Label>
        <Input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <Errors>{errors.email}</Errors>}
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <Errors>{errors.password}</Errors>}
        <Label>Comfirm password</Label>
        <Input
          type="password"
          name="comfirmPasseword"
          value={values.comfirmPasseword}
          onChange={handleChange}
          ref={valuesInput}
        />
        {errors.comfirmPasseword && <Errors>{errors.comfirmPasseword}</Errors>}
        <NewsLetterInfo>Where do you live?</NewsLetterInfo>
        <LocateList>
          Korean
          <DownArrowAlt width="20px" />
        </LocateList>
        <FormSubmitBtn>
          <Save width="20px" color="white" />
          &nbsp;SAVE CHANGES
        </FormSubmitBtn>
        <InputCancel onClick={onReset}>
          <ArrowReturnLeft width="20px" />
          &nbsp;CANCEL CHANGES
        </InputCancel>
      </form>
    </MypageListInfo>
  );
}
export default UserNamePw;

const MypageListInfo = styled.div`
  width: 94%;
  margin-right: -100%;
  margin-left: 0;
`;

const SuccsssMessage = styled.p`
  padding: 0.25em 0.5em;
  border: 2px solid #adc088;
  margin: 0.5em 0;
  line-height: 24px;
  font-size: 19px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  display: block;
  width: 40%;
  margin-bottom: 3px;
  padding: 0 0 5px 0;
  border: none;
  border-bottom: solid 2px #000;
  &:focus {
    border-bottom: solid 2px #adc088;
    outline: none;
  }
`;

const Errors = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
  opacity: 0.8;
`;

const LocateList = styled.div`
  width: 80px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 16px;
  cursor: pointer;
  ${({ theme }) => theme.flex("space-between", "", "")}
`;

const NewsLetterInfo = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;

  div {
    font-size: 13px;
    color: gray;
    font-style: italic;
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

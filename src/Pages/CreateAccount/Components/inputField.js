import React from "react";
import styled from "styled-components";
import { Person } from "@styled-icons/bootstrap/Person";
import validate from "./validateInfo";
import useForm from "./useForm";

const ValidForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <Header>WELCOME TO THE F-AMILY</Header>
        <InputWrap>
          <Label for="username">Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <Error>{errors.username}</Error>}
        </InputWrap>
        <InputWrap>
          <Label for="email">E-mail address</Label>
          <Input
            id="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </InputWrap>
        <InputWrap>
          <Label for="confirmEmail">Confirm e-mail address</Label>
          <Input
            id="confirmEmail"
            type="text"
            name="confirmEmail"
            value={values.confirmEmail}
            onChange={handleChange}
          />
          {errors.confirmEmail && <Error>{errors.confirmEmail}</Error>}
        </InputWrap>
        <Footer>
          You will be able to set your password after you've confirmed your
          email address.
        </Footer>
        <FormSumit>
          <button type="submit">
            <Person width="20px" />
            &nbsp; CREATE F-PROFILE
          </button>
        </FormSumit>
      </form>
    </Section>
  );
};

export default ValidForm;

const Section = styled.section`
  padding: 30px 20px;
`;

const Header = styled.h1`
  margin: 1rem 0;
  font-size: 60px;
`;

const InputWrap = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const Input = styled.input`
  margin-right: 20px;
  width: 328px;
  padding: 10px 0 4px 0;
  border: none;
  border-bottom: solid 2px #000;
  background: none;

  &:focus {
    border-bottom: solid 2px #adc088;
    outline: none;
  }
`;

const Error = styled.p`
  margin-top: 4px;
  color: red;
  opacity: 0.8;
`;

const Footer = styled.p`
  font-size: 13px;
  font-style: italic;
  color: #b2b2b2;
`;

const FormSumit = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 20px;
  button {
    ${({ theme }) => theme.flex("center", "center", "")}
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
`;

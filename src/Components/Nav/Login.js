import React from "react";
import styled from "styled-components";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { Link } from "react-router-dom";
import navUseForm from "./useForm";
import validate from "./loginValidate";

const navLogin = () => {
  const { handleSubmit, handleChange, values, errors } = navUseForm(validate);

  return (
    <Form onSubmit={handleSubmit}>
      <Wrap>
        <Label>Username or e-mail address</Label>
        <Input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <Errors>{errors.email}</Errors>}
      </Wrap>
      <Wrap>
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <Errors>{errors.password}</Errors>}
      </Wrap>
      <Button>
        <PersonFill width="20px" />
        &nbsp; LOG IN
      </Button>
      <LinkWrap>
        <FormLink>Request new password</FormLink>
      </LinkWrap>
      <LinkWrap>
        <Link to="/createAccount">
          <FormLink>Create new account</FormLink>
        </Link>
      </LinkWrap>
    </Form>
  );
};

export default navLogin;

const Form = styled.form`
  width: 100%;
  padding: 20px;
`;

const Wrap = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  margin: 0 auto;
  padding: 10px 0 4px 0;
  border: none;
  border-bottom: solid 2px #000;
  background: none;

  &:focus {
    border-bottom: solid 2px #adc088;
    outline: none;
  }
`;

const Errors = styled.span`
  display: block;
  font-size: 14px;
  color: red;
  opacity: 0.8;
`;

const LinkWrap = styled.div`
  margin-top: 14px;
  cursor: pointer;
`;

const Button = styled.button`
  ${({ theme }) => theme.flex("", "flex-end", "")}
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.25px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const FormLink = styled.a`
  padding: 2px 0;
  background-color: #adc088;
  color: #000;
  text-decoration: none;
`;

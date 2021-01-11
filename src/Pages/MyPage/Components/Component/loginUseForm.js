import { useState, useRef } from "react";
import { URL } from "../../../../Config/Url";

const useForm = (loginValidate) => {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();
  const [values, setValues] = useState({
    email: "",
    password: "",
    comfirmPasseword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const valuesInput = useRef();

  const onReset = (e) => {
    e.preventDefault();
    setValues({
      email: "",
      password: "",
      comfirmPasseword: "",
    });
    valuesInput.current.focus();
  };

  const handleSubmit = (e) => {
    setErrors(loginValidate(values));
    e.preventDefault();

    fetch(`${URL}/user/signup`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          onReset(e);
        }
        setMessage(result.message);
      });
  };

  return {
    handleChange,
    handleSubmit,
    onReset,
    values,
    errors,
    valuesInput,
    message,
  };
};

export default useForm;

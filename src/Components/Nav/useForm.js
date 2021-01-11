import { useState } from "react";
import { URL } from "../../Config/Url";
import { useHistory } from "react-router-dom";

const useForm = (validate) => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}/user/signin`, {
      method: "POST",
      body: JSON.stringify({
        user: values.email,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
          localStorage.setItem("user_name", result.user_name);
          history.push("/MyPage");
        } else if (result.message === "WRONG PASSWORD") {
          alert("Wrong Password");
        } else if (result.message === "INVALID REQUEST") {
          alert("Wrong Email");
        }
      });
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;

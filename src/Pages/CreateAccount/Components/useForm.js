import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { URL } from "../../../Config/Url";

const useForm = (callback, validate) => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmmiting] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    confirmEmail: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    const { username, email } = values;
    setErrors(validate(values));
    setIsSubmmiting(true);
    e.preventDefault();

    fetch(`${URL}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: email,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          alert("이메일을 확인해주세요.");
          history.push("/");
        } else if (result.message === "DUPLICATED_EMAIL") {
          alert("확인되지 않는 이메일입니다.");
        }
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;

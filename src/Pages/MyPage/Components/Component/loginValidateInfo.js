export default function loginValidateInfo(values) {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    values.email
  );
  const isPasswordValid = values.password.length > 3;
  const isComfirmPasswordValid = values.comfirmPasseword === values.password;

  return {
    email: isEmailValid
      ? ""
      : values.email
      ? "Email address is invalid"
      : "Email required",
    password: isPasswordValid
      ? ""
      : values.password
      ? "Please write at least 4 letters"
      : "Password required",
    comfirmPasseword: isComfirmPasswordValid
      ? ""
      : !values.comfirmPasseword
      ? "password required"
      : "Password do not match",
  };
}

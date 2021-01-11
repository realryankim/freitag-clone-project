export default function validateInfo(values) {
  const isNameValid = values.username.length > 4;
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    values.email
  );
  const isComfirmEmailValid = values.email === values.confirmEmail;

  return {
    username: isNameValid
      ? ""
      : values.username
      ? "Please write at least 4 letters."
      : "Username field is required.",
    email: isEmailValid
      ? ""
      : values.email
      ? "E-mail address field is required."
      : "Email address is required",
    confirmEmail: isComfirmEmailValid
      ? ""
      : !values.confirmEmail
      ? "Confirm e-mail address field is required."
      : "Your e-mail address and confirmed e-mail address must match.",
  };
}

export default function validate({ email, password }) {
  const isEmailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isPwValid = password.length > 4;

  return {
    email: isEmailFormat
      ? ""
      : email
      ? "Email address is required"
      : "Email Required",
    password: isPwValid
      ? ""
      : password
      ? "Please write at least 4 letters"
      : "Password Required",
  };
}

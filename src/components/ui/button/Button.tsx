import "./Button.scss";

type ButtonProps = {
  btnText: string;
};

const Button = ({ btnText }: ButtonProps) => {
  return (
    <button
      className={`button ${btnText === "LOGIN" ? "loginBtn" : ""} ${
        btnText === "REGISTER" ? "loginBtn" : ""
      }`}
    >
      {btnText}
    </button>
  );
};

export default Button;

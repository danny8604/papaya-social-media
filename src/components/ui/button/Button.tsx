import "./Button.scss";

type ButtonProps = {
  btnText: string;
  isLoginBtn?: boolean;
};

const Button = ({ btnText, isLoginBtn }: ButtonProps) => {
  return (
    <button className={`button ${isLoginBtn && "loginBtn"}`}>{btnText}</button>
  );
};

export default Button;

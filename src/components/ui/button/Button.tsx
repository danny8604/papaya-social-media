import "./Button.scss";

type ButtonProps = {
  btnText: string;
};

const Button = ({ btnText }: ButtonProps) => {
  return <button className="button">{btnText}</button>;
};

export default Button;

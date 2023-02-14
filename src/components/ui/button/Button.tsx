import "./Button.scss";

type ButtonProps = {
  btnText: string;
  blackBtn?: boolean;
  small?: boolean;
  clickAction?: () => void;
};

const Button = ({ btnText, blackBtn, small, clickAction }: ButtonProps) => {
  return (
    <button
      onClick={() => clickAction && clickAction()}
      className={`button ${blackBtn ? "blackBtn" : ""} ${small ? "small" : ""}`}
    >
      {btnText}
    </button>
  );
};

export default Button;

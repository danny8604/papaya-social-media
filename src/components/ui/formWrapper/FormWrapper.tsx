import Form from "../../form/Form";
import Card from "../card/Card";
import "./FormWrapper.scss";

type FormWrapperProps = {
  title: string;
  formType: "login" | "register";
};

const FormWrapper = ({ title, formType }: FormWrapperProps) => {
  return (
    <div className="formWrapper">
      <Card>
        <div className="formContainer  grid-columns-1">
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <Form formType={formType} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormWrapper;

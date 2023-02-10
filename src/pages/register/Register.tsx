import Form from "../../components/Form/Form";
import Card from "../../components/ui/card/Card";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <Card>
        <div className="loginContainer  grid-columns-1">
          <div className="top">
            <h1>PAPAYA MEDIA</h1>
          </div>
          <div className="bottom">
            <Form formType="register" />
          </div>
          <div>test push</div>
        </div>
      </Card>
    </div>
  );
};

export default Register;

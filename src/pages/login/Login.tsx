import Card from "../../components/ui/card/Card";
import "./Login.scss";
import Form from "../../components/Form/Form";

const Login = () => {
  return (
    <div className="login">
      <Card>
        <div className="loginContainer  grid-columns-1">
          <div className="top">
            <h1>PAPAYA MEDIA</h1>
          </div>
          <div className="bottom">
            <Form formType="login" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

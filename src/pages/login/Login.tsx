import Card from "../../components/ui/card/Card";
import "./Login.scss";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import Form from "../../components/Form/Form";

const Login = () => {
  return (
    <div className="login">
      <Card>
        <div className="loginContainer  grid-columns-2">
          <div className="left flex-column-spaceBetween">
            <div className="flex-column">
              <h1>PAPAYA MEDIA</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum, alias totam numquam ipsa exercitationem dignissimos, error
                nam, consequatur.
              </p>
            </div>
            <div className="flex-column">
              <span>Don't you have an account?</span>
              <Link to="/register">
                <Button btnText="REGISTER" isLoginBtn />
              </Link>
            </div>
          </div>
          <div className="right">
            <Form formType="login" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

import Card from "../../components/ui/card/Card";
import "./Login.scss";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button/Button";

const Login = () => {
  return (
    <div className="login">
      <Card>
        <div className="loginContainer  grid-columns-2">
          <div className="left">
            <h1>PAPAYA MEDIA.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cum, alias totam numquam ipsa exercitationem dignissimos, error
              nam, consequatur.
            </p>
            <span>Don't you have an account?</span>
            <Link to="/register">
              <Button btnText="Register" />
            </Link>
          </div>
          <div className="right">input here</div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

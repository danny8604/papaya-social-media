import "./Form.scss";
import * as yup from "yup";
import { Formik } from "formik";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";

const loginSchema = yup.object({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(8).max(20).required("required"),
});

type Login = {
  email: string;
  password: string;
};

const initialValuesLogin: Login = {
  email: "",
  password: "",
};

const registerSchema = yup.object({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(8).max(20).required("required"),
  confirmPassword: yup
    .string()
    .min(8)
    .max(20)
    .oneOf([yup.ref("password")], "password must match")
    .required("required"),
  location: yup.string(),
  occupation: yup.string(),
  picture: yup.string(),
});

type Register = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  location: string;
  occupation: string;
  picture: string;
};

const initialValuesRegister: Register = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  location: "",
  occupation: "",
  picture: "",
};

const yupSchema = {
  login: loginSchema,
  register: registerSchema,
};
const initialValues = {
  login: initialValuesLogin,
  register: initialValuesRegister,
};

const btnText = {
  login: "LOGIN",
  register: "REGISTER",
};

const linkText = {
  login: "Don't you have an account?",
  register: "Login here?",
};

const linkTo = {
  login: "/register",
  register: "/login",
};

type FormProps = {
  formType: "login" | "register";
};

// type TextInputState = {
//   label: string;
// };

const Form = ({ formType }: FormProps) => {
  return (
    <Formik
      initialValues={initialValues[formType]}
      validationSchema={yupSchema[formType]}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values, null, 2));
        action.resetForm();
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="form grid-columns-1 gap-small"
        >
          {formType === "login" && (
            <>
              <TextInput label="email" name="email" type="email" id="email" />
              <TextInput
                label="password"
                name="password"
                type="password"
                id="password"
              />
            </>
          )}

          {formType === "register" && (
            <>
              <div className="grid-columns-2 gap-small">
                <TextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  id="firstName"
                />
                <TextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  id="lastName"
                />
              </div>

              <TextInput label="Email" name="email" type="email" id="email" />
              <TextInput
                label="Password"
                name="password"
                type="password"
                id="password"
              />
              <TextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
              />

              <div className="grid-columns-2 gap-small">
                <TextInput
                  label="Location"
                  name="location"
                  type="text"
                  id="location"
                />{" "}
                <TextInput
                  label="Occupation"
                  name="occupation"
                  type="text"
                  id="occupation"
                />
              </div>
            </>
          )}

          <div className="btnContainer">
            <Link to={linkTo[formType]}>{linkText[formType]}</Link>
            <Button btnText={btnText[formType]} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;

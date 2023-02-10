import "./Form.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRef } from "react";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

// LOGIN
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

// REGISTER

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
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
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

type FormPorps = {
  formType: "login" | "register";
};

const btnText = {
  login: "LOGIN",
  register: "REGISTER",
};

const Form = ({ formType }: FormPorps) => {
  const emailFocus = useRef(null);
  const formik = useFormik({
    initialValues: initialValues[formType],
    validationSchema: yupSchema[formType],
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });

  return (
    <form
      className="form flex-column-spaceBetween"
      onSubmit={formik.handleSubmit}
    >
      <div className="inputContainer">
        <input
          id="email"
          type="email"
          ref={emailFocus.current}
          className={`${formik.errors.email && "error"} ${
            formik.values.email.length > 0 && "haveValue"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <label htmlFor="email">Email</label>
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className="errorMessage">{formik.errors.email}</div>
      ) : null}
      <div className="inputContainer">
        <input
          id="password"
          type="password"
          className={`${formik.errors.password && "error"} ${
            formik.values.password.length > 0 && "haveValue"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <label htmlFor="password">password</label>
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className="errorMessage">{formik.errors.password}</div>
      ) : null}
      <div className="btnContainer">
        <Link to={"/register"}>Don't you have an account?</Link>
        <Button btnText={btnText[formType]} />
      </div>
    </form>
  );
};

export default Form;

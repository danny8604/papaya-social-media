import "./Form.scss";
import * as yup from "yup";
import {
  ErrorMessage,
  FieldHookConfig,
  Formik,
  FormikProps,
  useField,
  useFormik,
} from "formik";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    .oneOf([yup.ref("password")], "password must match"),
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

type FormProps = {
  formType: "login" | "register";
};

const Form = ({ formType }: FormProps) => {
  console.log(formType, "formType");

  const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <input {...field} {...props} />
        <label htmlFor={props.id || props.name}>{label}</label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    <Formik
      initialValues={initialValues[formType]}
      validationSchema={yupSchema[formType]}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        console.log("🐧🐧");
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          {formType === "login" && (
            <>
              <TextInput
                label="email"
                name="email"
                type="email"
                placeholder="email"
              />
              <TextInput
                label="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </>
          )}
          {formType === "register" && (
            <>
              <TextInput
                label="firstName"
                name="firstName"
                type="text"
                placeholder="firstName"
              />
              <TextInput
                label="lastName"
                name="lastName"
                type="text"
                placeholder="lastName"
              />
              <TextInput
                label="email"
                name="email"
                type="email"
                placeholder="email"
              />
              <TextInput
                label="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </>
          )}
          <button>submit</button>
        </form>
      )}
    </Formik>
  );
};

export default Form;

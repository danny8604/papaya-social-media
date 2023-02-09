import "./Form.scss";
import * as yup from "yup";
import { useFormik } from "formik";

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

const Form = ({ formType }: FormPorps) => {
  const formik = useFormik({
    initialValues: initialValues[formType],
    validationSchema: yupSchema[formType],
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">rtest</button>
    </form>
  );
};

export default Form;

import "./Form.scss";
import * as yup from "yup";
import { Formik, FormikHelpers } from "formik";
import Button from "../ui/button/Button";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import { useDropzone } from "react-dropzone";

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

const TextInputs = {
  login: [
    {
      input: {
        name: "email",
        type: "email",
        id: "email",
        label: "Email",
      },
    },
    {
      input: {
        name: "password",
        type: "password",
        id: "password",
        label: "Password",
      },
    },
  ],
  register: [
    {
      input: {
        name: "firstName",
        type: "text",
        id: "firstName",
        label: "First Name",
      },
    },
    {
      input: {
        name: "lastName",
        type: "text",
        id: "lastName",
        label: "Last Name",
      },
    },
    {
      input: {
        name: "email",
        type: "email",
        id: "email",
        label: "Email",
      },
    },
    {
      input: {
        name: "password",
        type: "password",
        id: "password",
        label: "Password",
      },
    },
    {
      input: {
        name: "confirmPassword",
        type: "password",
        id: "confirmPassword",
        label: "Confirm Password",
      },
    },
    {
      input: {
        name: "location",
        type: "text",
        id: "location",
        label: "Location",
      },
    },
    {
      input: {
        name: "occupation",
        type: "text",
        id: "occupation",
        label: "Occupation",
      },
    },
  ],
};

type FormProps = {
  formType: "login" | "register";
};

const Form = ({ formType }: FormProps) => {
  const navigate = useNavigate();
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
  });
  const isLoginForm = formType === "login";
  const isRegisterForm = formType === "register";

  const register = async (
    values: Login | Register | any,
    action: FormikHelpers<Login | Register>
  ) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", acceptedFiles[0].name);

    action.resetForm();
  };

  const login = async (
    values: Login | Register,
    action: FormikHelpers<Login | Register>
  ) => {
    alert("login!!");
    navigate("/");
    action.resetForm();
  };

  const FormSubmithandler = async (
    values: Login | Register,
    action: FormikHelpers<Login | Register>
  ) => {
    if (isLoginForm) await login(values, action);
    if (isRegisterForm) await register(values, action);
  };
  return (
    <Formik
      initialValues={initialValues[formType]}
      validationSchema={yupSchema[formType]}
      onSubmit={FormSubmithandler}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="form grid-columns-1 gap-small"
        >
          {isLoginForm && (
            <>
              {TextInputs.login.map(({ input }) => (
                <TextInput {...input} key={input.id} />
              ))}
            </>
          )}
          {isRegisterForm && (
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

              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragAccept && <p>All files will be accepted</p>}
                {isDragReject && <p>Some files will be rejected</p>}
                {!isDragActive && !isDragAccept && (
                  <p>Drop some files here ...</p>
                )}
              </div>
            </>
          )}

          <div className="btnContainer">
            <Link to={linkTo[formType]}>{linkText[formType]}</Link>
            <Button btnText={btnText[formType]} blackBtn />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;

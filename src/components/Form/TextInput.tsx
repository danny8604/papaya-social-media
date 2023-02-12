import { FieldHookConfig, useField } from "formik";
import "./TextInput.scss";

type TextInputState = {
  label: string;
};

const TextInput = ({
  label,
  ...props
}: TextInputState & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="inputContainer">
        <input
          {...field}
          className={`${meta.touched && meta.error ? "error" : ""} ${
            meta.value.length > 0 ? "haveValue" : ""
          }`}
        />
        <label htmlFor={props.name}>{label}</label>
      </div>
      {meta.touched && meta.error ? (
        <div className="errorMessage"> {meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;

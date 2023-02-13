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
  const isShowInputError = meta.touched && meta.error;
  return (
    <div>
      <div className="inputContainer">
        <input
          {...field}
          type={props.type}
          id={props.id}
          className={`${isShowInputError ? "error" : ""} ${
            meta.value.length > 0 ? "haveValue" : ""
          }`}
        />
        <label htmlFor={props.name}>{label}</label>
      </div>
      {isShowInputError ? (
        <div className="errorMessage"> {meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;

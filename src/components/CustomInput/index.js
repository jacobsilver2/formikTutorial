import React from "react";
import { useField } from "formik";
import CustomLabel from "../CustomLabel";
import "./CustomInput.css";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <CustomLabel htmlFor={props.id}>{label}</CustomLabel>
      <input className="custom-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="custom-input-error">{meta.error}</span>
      ) : null}
    </>
  );
};

export default CustomInput;

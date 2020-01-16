import React from "react";
import Select from "react-select";
import { useFormikContext, useField } from "formik";

import CustomLabel from "../CustomLabel";

const CustomDropdown = ({ options, label, ...props }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(props);

  function handleOptionChange(selection) {
    setFieldValue(props.name, selection);
  }

  function updateBlur() {
    setFieldTouched(props.name, true);
  }

  return (
    <>
      <CustomLabel htmlFor={props.id}>{label}</CustomLabel>
      <Select
        options={options}
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleOptionChange}
      />
      {meta.touched && meta.error ? (
        <span className="custom-input-error">{meta.error}</span>
      ) : null}
    </>
  );
};

export default CustomDropdown;

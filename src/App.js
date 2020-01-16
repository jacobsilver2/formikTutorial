import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Custom Inputs
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import CustomDropdown from "./components/CustomDropdown";

import "./App.css";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be more than two characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be more than two characters")
    .required("Last name is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  permission: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required("Permission type is required")
  })
});

function handleSubmit(values) {
  const { firstName, lastName, email, permission } = values;
  alert(`
  Submitted User: 
  User: ${firstName} ${lastName} 
  Email: ${email}
  Permission: ${permission.value}
  `);
}
function App({ savedUser }) {
  return (
    <div className="App">
      <div>
        <Formik
          initialValues={savedUser}
          validationSchema={validationSchema}
          onSubmit={values => handleSubmit(values)}
        >
          {props => (
            <Form>
              <div className="form-container">
                <CustomInput
                  label="First Name"
                  type="text"
                  id="userFirstName"
                  name="firstName"
                />
                <CustomInput
                  label="Last Name"
                  type="text"
                  id="userLastName"
                  name="lastName"
                />
                <CustomInput
                  label="Email"
                  type="email"
                  id="userEmail"
                  name="email"
                />
                <CustomDropdown
                  label="User Permissions"
                  id="userPermission"
                  name="permission"
                  type="text"
                  options={[
                    { value: "admin", label: "Admin Access" },
                    { value: "normal", label: "Normal Access" }
                  ]}
                />

                <CustomButton disabled={props.isSubmitting} type="submit">
                  Submit
                </CustomButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

App.defaultProps = {
  savedUser: {
    firstName: "",
    lastName: "",
    email: "",
    permission: { value: "", label: "" }
  }
};

App.propTypes = {
  savedUser: PropTypes.object
};

export default App;

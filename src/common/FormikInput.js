import React from "react";
import { Input } from "antd";
import { Field } from "formik";
import "./FormikInput.style.scss";

const FormikInput = (props) => (
  <Field {...props}>{({ field }) => <Input {...props} {...field} />}</Field>
);

export default FormikInput;

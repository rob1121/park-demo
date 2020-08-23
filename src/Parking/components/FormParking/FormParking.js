import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Modal, Form, Button } from "antd";
import Input from "../../../common/FormikInput";
import validationSchema from "./FormParking.validationSchema";
import "./FormParking.style.scss";
import { FORM_LAYOUT } from "./FormParking.constant";

const FormParking = ({
  ref,
  initialValues,
  isReadOnly,
  onOk,
  onCancel,
  okText,
  type,
  ...props
}) => {
  const formRef = useRef();
  useEffect(() => {
    formRef && formRef.current && formRef.current.setValues(initialValues);
  }, [initialValues, formRef]);

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      validationSchema={isReadOnly ? undefined : validationSchema}
      onSubmit={onOk}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form {...FORM_LAYOUT}>
          <Modal
            {...props}
            visible
            footer={[
              <Button key="back" onClick={onCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={handleSubmit}>
                {okText}
              </Button>,
            ]}
          >
            <Form.Item label="Plate number">
              <Input type="text" name="plateNumber" disabled={isReadOnly} />
              <small className="error">
                {touched.plateNumber && errors.plateNumber}
              </small>
            </Form.Item>

            <Form.Item label="Color">
              <Input type="text" name="color" disabled={isReadOnly} />
              <small className="error">{touched.color && errors.color}</small>
            </Form.Item>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

FormParking.propTypes = {
  isReadOnly: PropTypes.bool,
  validationSchema: PropTypes.object,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  okText: PropTypes.string,
};

FormParking.defaultProps = {
  isReadOnly: false,
  validationSchema: undefined,
  okText: "OK",
};

export default FormParking;

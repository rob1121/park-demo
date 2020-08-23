import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Form, Modal, Button } from "antd";
import Input from "../../../common/FormikInput";
import { setParkingCapacity } from "../../state/slice";
import validationSchema from "./CreateParkingLot.validationSchema";

const CreateParkingLot = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSetCapacity = (values) => {
    dispatch(setParkingCapacity(values.parkingLotCapacity));
    history.push("/park");
  };
  const handleCancel = () => history.push("/");

  return (
    <Formik
      initialValues={{
        parkingLotCapacity: undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSetCapacity}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form>
          <Modal
            title="Set parking capacity"
            visible
            onCancel={handleCancel}
            footer={[
              <Button type="primary" onClick={handleSubmit}>
                Set
              </Button>,
            ]}
          >
            <Form.Item name="parkingLotCapacity">
              <Input type="parkingLotCapacity" name="parkingLotCapacity" />
              <small className="error">
                {touched.parkingLotCapacity && errors.parkingLotCapacity}
              </small>
            </Form.Item>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

export default CreateParkingLot;

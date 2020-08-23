import React, { useEffect } from "react";
import FormParking from "../FormParking";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enterParking } from "../../state/slice";
import { selectParkingCapacity } from "../../state/selector";

const EditPark = () => {
  const capacity = useSelector(selectParkingCapacity);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (capacity === 0) {
      history.push("/park");
    }
  }, []);

  const handleEnterParking = (values) => {
    dispatch(enterParking(values));
    history.push("/park");
  };

  const handleCancel = () => history.push("/park");

  return (
    <FormParking
      initialValues={{
        plateNumber: "",
        color: "",
      }}
      title="Enter parking"
      okText="Enter"
      onOk={handleEnterParking}
      onCancel={handleCancel}
    />
  );
};

export default EditPark;

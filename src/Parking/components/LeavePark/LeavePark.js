import React, { useEffect } from "react";
import FormParking from "../FormParking";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { leaveParking } from "../../state/slice";
import { selectSlots } from "../../state/selector";

const LeavePark = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const slots = useSelector(selectSlots);

  useEffect(() => {
    if (slots.length === 0) {
      history.push("/park");
    }
  }, []);

  const handleLeaveParking = () => {
    dispatch(leaveParking(id));
    history.push("/park");
  };

  const handleCancel = () => history.push("/park");

  return (
    <FormParking
      initialValues={{
        ...slots[id],
      }}
      title="Leave Parking"
      okText="Leave"
      type="delete"
      onOk={handleLeaveParking}
      onCancel={handleCancel}
      isReadOnly
    />
  );
};

export default LeavePark;

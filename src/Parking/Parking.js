import React, { useEffect } from "react";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ParkingTable from "./components/ParkingTable";
import LinkModal from "../common/LinkModal";
import {
  selectParkingCapacity,
  selectParkingAvailableSlotCount,
} from "./state/selector";
import "./Parking.style.scss";

const Parking = () => {
  const capacity = useSelector(selectParkingCapacity);
  const availableSlot = useSelector(selectParkingAvailableSlotCount);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (capacity === 0) {
      history.push({
        pathname: "/park/capacity",
        state: { background: location },
      });
    }
  }, []);

  return (
    <div className="parking-container">
      <div className="btn-container">
        <LinkModal
          pathname="/"
          title="Back"
          noState
          icon="back"
          type="button"
        />
        <LinkModal
          pathname={`/park/enter`}
          title="Enter Parking"
          icon="add"
          type="button"
        />
      </div>
      <ParkingTable />
      <div className="parking-table-status">
        <small>Capacity: {capacity}</small>
        <Divider type="vertical" />
        <small>Available slot: {availableSlot}</small>
      </div>
    </div>
  );
};

export default Parking;

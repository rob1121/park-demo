import React from "react";
import LinkModal from "../../../common/LinkModal";

export const COLUMNS = [
  {
    title: "Slot No.",
    dataIndex: "slotNumber",
    key: "slotNumber",
    render: (slotNumber) => slotNumber + 1,
  },
  {
    title: "Plate Number",
    dataIndex: "plateNumber",
    key: "plateNumber",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    filters: [],
    onFilter: (value, record) => record.color.includes(value),
  },
  {
    title: "Actions",
    dataIndex: "slotNumber",
    key: "actions",
    render: (slotNumber) => (
      <>
        <LinkModal
          pathname={`/park/${slotNumber}/leave`}
          title="Leave parking"
        />
      </>
    ),
  },
];

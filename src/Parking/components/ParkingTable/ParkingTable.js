import React, { useMemo } from "react";
import { Table } from "antd";
import { COLUMNS } from "./ParkingTable.constant";
import { selectParkingTable, selectCarColors } from "../../state/selector";
import { useSelector } from "react-redux";

const ParkingTable = () => {
  const dataSource = useSelector(selectParkingTable);
  const colors = useSelector(selectCarColors);
  const columns = useMemo(() => {
    const colorIndex = COLUMNS.findIndex(({ title }) => title === "Color");

    COLUMNS[colorIndex].filters = [...new Set(colors)]
      .filter(Boolean)
      .map((color) => ({
        text: color,
        value: color,
      }));
    return COLUMNS;
  }, [colors]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        defaultPageSize: 10,
      }}
      scroll={{ y: 450 }}
    />
  );
};

export default ParkingTable;

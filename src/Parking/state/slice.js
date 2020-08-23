import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const initialState = {
  slots: [],
};

const park = createSlice({
  name: "park",
  initialState,
  reducers: {
    setParkingCapacity: (state, action) => {
      state.slots.length = action.payload;
    },
    enterParking: (state, action) => {
      if (state.slots.includes(undefined)) {
        const freeSlot = state.slots.findIndex((slot) => slot === undefined);
        state.slots[freeSlot] = action.payload;
      } else {
        message.error("Parking slots are all occupied!");
      }
    },
    leaveParking: (state, action) => {
      state.slots[action.payload] = undefined;
    },
  },
});

export const { setParkingCapacity, enterParking, leaveParking } = park.actions;

export default park.reducer;

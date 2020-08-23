import { createSelector } from "@reduxjs/toolkit";

export const selectPark = (state) => state.park;

export const selectSlots = createSelector([selectPark], (state) =>
  state.slots.filter(Boolean)
);

export const selectParkingTable = createSelector([selectPark], (state) => {
  const list = [];
  state.slots.map((data, index) => {
    if (data !== undefined)
      list.push({
        slotNumber: index,
        plateNumber: data.plateNumber,
        color: data.color,
      });
  });

  return list;
});

export const selectParkingCapacity = createSelector(
  [selectPark],
  (state) => state.slots.length
);

export const selectCarColors = createSelector([selectPark], (state) =>
  state.slots.map(({ color }) => color)
);

export const selectParkingAvailableSlotCount = createSelector(
  [selectPark],
  (state) => {
    let count = 0;
    for (let i = 0; i < state.slots.length; i++) {
      count = state.slots[i] ? count : count + 1;
    }

    return count;
  }
);

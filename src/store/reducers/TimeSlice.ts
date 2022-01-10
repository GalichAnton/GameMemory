import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITimeState {
  timeCounter: number;
  savedTime: number;
}

const initialState: ITimeState = {
  timeCounter: 0,
  savedTime: 0,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTimeCounter(state, action: PayloadAction<number>) {
      state.timeCounter = action.payload;
    },
    setSavedTime(state, action: PayloadAction<number>) {
      state.savedTime = action.payload;
    },
  },
});

export const { setTimeCounter, setSavedTime } = timeSlice.actions;
export default timeSlice.reducer;

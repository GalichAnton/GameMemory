import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IResultState {
  resultStatus: boolean;
  resultFormStatus: boolean;
}

const initialState: IResultState = {
  resultStatus: false,
  resultFormStatus: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResultStatus(state, action: PayloadAction<boolean>) {
      state.resultStatus = action.payload;
    },
    setResultFormStatus(state, action: PayloadAction<boolean>) {
      state.resultFormStatus = action.payload;
    },
  },
});

export const { setResultStatus, setResultFormStatus } = resultSlice.actions;
export default resultSlice.reducer;

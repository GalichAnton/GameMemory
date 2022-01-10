import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGameState {
  gameStatus: boolean;
  winStatus: boolean;
}

const initialState: IGameState = {
  gameStatus: false,
  winStatus: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameStatus(state, action: PayloadAction<boolean>) {
      state.gameStatus = action.payload;
    },
    setWinStatus(state, action: PayloadAction<boolean>) {
      state.winStatus = action.payload;
    },
  },
});

export const { setGameStatus, setWinStatus } = gameSlice.actions;
export default gameSlice.reducer;

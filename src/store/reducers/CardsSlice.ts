import { ICard } from "../../types/ICard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICardsState {
  cards: ICard[];
}

const initialState: ICardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setInitialCards(state, action: PayloadAction<ICard[]>) {
      state.cards = action.payload;
    },
    flipCard(state, action: PayloadAction<number>) {
      state.cards[action.payload].flip = !state.cards[action.payload].flip;
    },
  },
});

export const { setInitialCards, flipCard } = cardsSlice.actions;
export default cardsSlice.reducer;

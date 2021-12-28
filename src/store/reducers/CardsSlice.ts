import {ICard} from "../../types/ICard";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";




interface ICardsState {
  cards: ICard[]
  isLoading: boolean
  error: string
}

const initialState: ICardsState = {
  cards: [],
  isLoading: false,
  error: ''
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    cardsFetching(state) {
      state.isLoading = true
    },
    cardsFetchingSuccess(state,action: PayloadAction<ICard[]>) {
      state.isLoading = false
      state.error = ''
      state.cards = action.payload
    },
    cardsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    cardFlip(state, action :PayloadAction<number>){
      state.cards[action.payload-1].isUp = !state.cards[action.payload-1].isUp
    }
  }
})
export const {cardFlip} = cardsSlice.actions
export default cardsSlice.reducer
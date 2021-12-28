import {AppDispatch} from "../store";
import axios from "axios";
import {ICard} from "../../types/ICard";
import {cardsSlice} from "./CardsSlice";

export const fetchCards = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardsSlice.actions.cardsFetching())
    const res = await axios.get<ICard[]>('https://61c9742520ac1c0017ed8c63.mockapi.io/cards')
    dispatch(cardsSlice.actions.cardsFetchingSuccess(res.data))
  } catch (e:any) {
    dispatch(cardsSlice.actions.cardsFetchingError(`Ошибочка ${e.message}`))
  }
}


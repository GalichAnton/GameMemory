import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./reducers/CardsSlice";
import gameReducer from "./reducers/GameSlice";
import timeReducer from "./reducers/TimeSlice";
import resultReducer from "./reducers/ResultSlice";

const rootReducer = combineReducers({
  cardsReducer,
  gameReducer,
  timeReducer,
  resultReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

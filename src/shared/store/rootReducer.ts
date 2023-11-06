import { combineReducers } from "@reduxjs/toolkit";
import { requestSlice } from "./ducks/request/slice";

export const rootReducer = combineReducers({
  requests: requestSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

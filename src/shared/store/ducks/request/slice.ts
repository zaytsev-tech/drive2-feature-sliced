import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestInitialState } from "./state";
import { RequestType } from "./types";

export const requestSlice = createSlice({
  name: "request",
  initialState: requestInitialState,
  reducers: {
    addRequest: (state, action: PayloadAction<RequestType>) => {
      const slicedState = state.slice(-3);
      return [...slicedState, action.payload];
    },
    removeRequest: (state, action: PayloadAction<string>) => {
      const filteredState = state.filter(
        (request) => request.id !== action.payload
      );
      return filteredState;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;

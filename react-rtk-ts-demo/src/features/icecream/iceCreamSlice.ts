import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    // extra reducers can be added here
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;

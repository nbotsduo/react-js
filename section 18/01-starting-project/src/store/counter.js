import {  createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialCounterState = {
  counter: 0,
  showCounter: true,
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    login() {},
    increment(state) {
      state.counter++;
      // state.showCounter;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
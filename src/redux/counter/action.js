import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";

export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});

export const subs = createAction("counter/subs");

export const TimeAddVal = createAsyncThunk(
  "counter/time-add-val",
  async (vals, thunkApi) => {
    try {
      await TimeConsumerDelay({
        method: false, // set true for fulfilled response and false for rejection
        time: 4000
      });
      return vals;
    } catch (error) {
      console.log({ error });
      thunkApi.abort(error);
    }
  }
);

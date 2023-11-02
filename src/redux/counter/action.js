import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 *
 * @param {number} val - The value to be added to the counter.
 * @returns {Object} An action object with a payload containing the value to be added.
 */
export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});
/**
 * Creates and exports an action with the type "counter/subs".
 * 
 * @returns {Object} An action object with the type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that adds a value to the counter after a delay.
 * 
 * @param {Object} vals - The values to add to the counter.
 * @param {Object} thunkApi - The Thunk API object.
 * @returns {Promise} - A promise that resolves to the added values if the delay is successful, or rejects with an error if the delay fails.
 */
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
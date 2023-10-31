import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 *
 * @param {number} val - The value to add to the counter.
 * @returns {Object} - An action object with a payload containing the value to add.
 */
export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});
/**
 * Creates and exports an action creator for the "counter/subs" action.
 *
 * @returns {Function} - The action creator function.
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that waits for a specified delay before adding a value.
 * 
 * @function
 * @async
 * @param {Object} vals - The values to add.
 * @param {Object} thunkApi - The Thunk API.
 * @returns {Promise} - A promise that resolves to the added values.
 * @throws {Error} - If the TimeConsumerDelay method rejects, an error is thrown and the action is aborted.
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
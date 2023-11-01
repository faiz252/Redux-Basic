import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 * 
 * @returns {Object} The action object.
 */
export const addTen = createAction("counter/addten");
/**
 * Creates and exports an action creator for the "counter/subs" action.
 *
 * @returns {Function} - The action creator function.
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that waits for a specified time before adding a value.
 * 
 * @function TimeAddVal
 * @module "counter/time-add-val"
 * @async
 * @param {Object} vals - The values to add after the delay.
 * @param {Object} thunkApi - The thunk API.
 * @returns {Promise} - A promise that resolves to the added values, or rejects with an error.
 */
export const TimeAddVal = createAsyncThunk(
  "counter/time-add-val",
  async (vals, thunkApi) => {
    try {
      await TimeConsumerDelay({
        method: false, 
        time: 4000
      });
      return vals;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
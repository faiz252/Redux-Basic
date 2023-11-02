import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 *
 * @returns {Object} - An action object with a type of "counter/addten".
 */
export const addTen = createAction("counter/addten");
/**
 * Exports a Redux action creator for decrementing a counter.
 *
 * @returns {Function} - A Redux action creator that produces actions with type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that adds a value to the time after a delay.
 * 
 * @param {Object} vals - The values to be added.
 * @param {Function} abort - A function to abort the action if an error occurs.
 * @returns {Promise} A promise that resolves to the added values after a delay.
 */
export const TimeAddVal = createAsyncThunk(
  "counter/time-add-val",
  async (vals, { abort }) => {
    try {
      await TimeConsumerDelay({
        method: false, 
        time: 4000
      });
      return vals;
    } catch (error) {
      console.log({ error });
      abort(error);
    }
  }
);
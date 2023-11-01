import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates and exports an action creator for the 'add ten' action.
 * 
 * @returns {Function} - A Redux action creator function.
 */
export const addTen = createAction("counter/addten");
/**
 * Creates and exports an action with the type "counter/subs".
 *
 * @returns {Object} An action object with the type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that adds a value to a counter after a delay.
 * This action creator uses the Redux Toolkit's createAsyncThunk function to handle the async logic.
 * It dispatches a pending action when it starts, a fulfilled action if it finishes successfully, 
 * and a rejected action if it fails.
 *
 * @param {string} "counter/time-add-val" - The action type prefix for the generated action types.
 * @param {function} async (vals, thunkApi) - The payload creator function. 
 * This function should return a promise that resolves to the value we want to store as the payload of the action object.
 * The function receives two arguments: the first argument is a single value, the second argument is an object 
 * that contains all of the parameters that were passed to the dispatched action.
 * @returns {object} - The action object.
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
      thunkApi.abort(error);
    }
  }
);
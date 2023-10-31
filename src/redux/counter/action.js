import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 *
 * @function
 * @param {number} val - The value to add to the counter.
 * @returns {Object} An action object with a `type` and `payload`.
 */
export const addTen = createAction("counter/addten", (val) => {
    return {
        payload: val
    };
});
/**
 * Creates and exports an action with the type "counter/subs".
 * 
 * @returns {Object} - An action object with the type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that adds a value to the counter after a delay.
 * 
 * This action creator uses the `createAsyncThunk` function from Redux Toolkit to handle the asynchronous logic.
 * It first waits for a delay using the `TimeConsumerDelay` function, then dispatches the action with the value to add to the counter.
 * If an error occurs during this process, it aborts the action and logs the error to the console.
 * 
 * @param {string} "counter/time-add-val" - The action type to dispatch.
 * @param {function} async (vals, thunkApi) - The payload creator function. This function should return a promise that resolves to the value to add to the counter.
 * @returns {object} - An action object that can be dispatched to the Redux store.
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
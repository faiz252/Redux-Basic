/**
 * Delays the execution of a method by a specified amount of time.
 * 
 * @param {Object} param0 - An object containing the method to execute and the delay time.
 * @param {Function} param0.method - The method to execute after the delay. If this method is truthy, the promise will resolve with "success". Otherwise, it will reject with "error".
 * @param {number} param0.time - The delay time in milliseconds.
 * @returns {Promise} - A promise that resolves or rejects based on the truthiness of the method after the specified delay.
 */
export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      method ? res("success") : rej("error");
    }, time);
  });
}
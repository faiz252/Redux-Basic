/**
 * A function that creates a delay based on the given time and then resolves or rejects a promise based on the given method.
 *
 * @param {Object} param0 - An object containing the method and time.
 * @param {boolean} param0.method - A boolean value that determines whether the promise should be resolved or rejected.
 * @param {number} param0.time - The amount of time (in milliseconds) to delay before resolving or rejecting the promise.
 * @returns {Promise} - A promise that resolves with the string "success" if the method is truthy, or rejects with the string "error" if the method is falsy, after the specified delay.
 */
export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (method) {
        res("success");
      } else {
        rej("error");
      }
    }, time);
  });
}
/**
 * Returns a promise that resolves or rejects after a specified delay.
 *
 * @export
 * @param {Object} params - An object containing the method and time delay.
 * @param {boolean} params.method - If true, the promise will resolve; otherwise, it will reject.
 * @param {number} params.time - The delay in milliseconds before the promise resolves or rejects.
 * @returns {Promise} - A promise that resolves with the string "success" if method is true, or rejects with the string "error" if method is false.
 */
export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      method ? res("success") : rej("error");
    }, time);
  });
}
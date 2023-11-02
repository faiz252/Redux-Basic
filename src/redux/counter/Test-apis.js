/**
 * Returns a Promise that resolves or rejects after a delay depending on the provided method.
 * 
 * @param {Object} params - An object containing the method and time parameters.
 * @param {boolean} params.method - If true, the Promise will resolve; if false, it will reject.
 * @param {number} params.time - The delay in milliseconds before the Promise resolves or rejects.
 * @returns {Promise} - A Promise that resolves with "success" if method is true, or rejects with "error" if method is false.
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
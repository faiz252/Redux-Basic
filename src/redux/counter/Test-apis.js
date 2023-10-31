/**
 * Creates a Promise that will be resolved or rejected after a certain delay.
 * 
 * @param {Object} params - An object containing method and time properties.
 * @param {boolean} params.method - If true, the Promise will be resolved; if false, the Promise will be rejected.
 * @param {number} params.time - The delay in milliseconds before the Promise is resolved or rejected.
 * @returns {Promise} - A Promise that will be resolved or rejected after the specified delay.
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
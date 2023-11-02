/**
 * Returns a promise that resolves or rejects based on the provided method.
 * 
 * @param {Object} options - An object containing the method to be checked.
 * @param {Function} options.method - The method to check. If it exists, the promise resolves. If not, the promise rejects.
 * @returns {Promise} - A promise that resolves with "success" if the method exists and rejects with "error" if not.
 */
export function TimeConsumerDelay({ method }) {
  return new Promise((res, rej) => {
    if (method) {
      res("success");
    } else {
      rej("error");
    }
  });
}
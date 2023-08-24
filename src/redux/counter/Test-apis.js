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

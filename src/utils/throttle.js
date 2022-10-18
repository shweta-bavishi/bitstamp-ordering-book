export const throttleMethod = (fn, delay) => {
  let throttleCount = true;
  return function () {
    let context = this,
      args = arguments;
    if (throttleCount) {
      fn.apply(context, args);
      throttleCount = false;
      setTimeout(() => {
        throttleCount = true;
      }, delay);
    }
  };
};

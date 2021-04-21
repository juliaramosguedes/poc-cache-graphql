const decorator = (fn, params) => {
  return function(...args) {
    return fn(...args);
  }
}

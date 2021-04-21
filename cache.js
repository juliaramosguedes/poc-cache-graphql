const NodeCache = require('node-cache');
const myCache = new NodeCache({ maxKeys: 10, checkperiod: 60, stdTTL: 60 });

const cache = (fn) => {

  return function (...args) {
    const key = args[0].originalUrl;
    const data = myCache.get(key);
    if (data) return args[0].res.json(data);

    const call = fn(...args);
    const cachedSucceed = myCache.set(key, call, 300);
    if (cachedSucceed) return call;
  };
};

module.exports = cache;

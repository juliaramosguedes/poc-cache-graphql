const NodeCache = require('node-cache');
const myCache = new NodeCache({ maxKeys: 10, checkperiod: 60, stdTTL: 60 });

const cache = (fn, params) => (...args) => {
  const { maxAge, key } = params;
  const data = myCache.get(key);
  if (data) return args[0].res.json(data);

  const call = fn(...args);
  const cachedSucceed = myCache.set(key, call, maxAge);
  if (cachedSucceed) return call;
};

module.exports = cache;

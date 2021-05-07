const NodeCache = require('node-cache');
const crypto = require('crypto');
const myCache = new NodeCache({ maxKeys: 10, checkperiod: 60, stdTTL: 0 });

const cache = (fn, maxAge) => (...args) => {
  const method = args[3].fieldName;
  const arguments = args[3].fieldNodes[0].arguments;
  const authorization = args[2].headers.authorization;

  const hash = crypto.createHash('md5')
    .update(method+JSON.stringify(arguments)+authorization)
    .digest('hex');

  const data = myCache.get(hash);
  if (data) return data;

  const call = fn(...args);
  myCache.set(hash, call, maxAge);
  return call;
};

module.exports = cache;

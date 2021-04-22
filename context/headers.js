const { mapKeys, toLower } = require('lodash');

module.exports = ({ req }) =>
  req.headers ? mapKeys(req.headers, (value, key) => toLower(key)) : {};

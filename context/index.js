const headersContext = require('./headers');

const contextCreator = () => async (...args) => {
  return {
    headers: headersContext(...args),
  };
};

module.exports = contextCreator;

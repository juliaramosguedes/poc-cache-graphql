const cache = require('./cache');

module.exports = {
  Query: {
    getList: cache((request, response) => {
      console.log('chamou a rota');
      const result = ["a", "b", "c"];
      response.json(result);
      return result;
    }, {maxAge: 360, key: "getList" })
  }
}

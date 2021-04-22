const cache = require('../../cache');

module.exports = {
  Query: {
    listBooks: cache((parent, data, { dataSources }) => {
      console.log('listBooks called');
      return dataSources.book.list();
    }, 360),
  },
};

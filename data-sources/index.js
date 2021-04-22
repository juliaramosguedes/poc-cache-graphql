const Book = require('./book');

const dataSourcesCreator = (settings = {}) => () => ({
  book: new Book(settings),
});

module.exports = dataSourcesCreator;

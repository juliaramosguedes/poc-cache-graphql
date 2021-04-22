const { get, compact, map, merge } = require('lodash');

const schema = [
  require('./book'),
];

const getAndCompact = (arr, path) => compact(map(arr, (a) => get(a, path)));

const schemaCreator = () => ({
  typeDefs: getAndCompact(schema, 'typeDefs'),
  resolvers: merge({}, ...getAndCompact(schema, 'resolvers')),
});

module.exports = schemaCreator;

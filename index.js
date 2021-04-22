const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const schemaCreator = require('./schema');
const dataSourcesCreator = require('./data-sources');
const contextCreator = require('./context');
const { graphqlPath, port } = require('./config');

const server = new ApolloServer({
  ...schemaCreator(),
  dataSources: dataSourcesCreator(),
  context: contextCreator(),
});

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

server.applyMiddleware({ app, path: graphqlPath });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${graphqlPath}`)
);

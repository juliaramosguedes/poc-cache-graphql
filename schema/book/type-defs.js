const { gql } = require('apollo-server-express');

module.exports = gql`
    type Book {
        title: String!
        author: String!
    }

    type Query {
        listBooks(name: String): [Book]!
    }
`;

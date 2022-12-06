const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Country {
    _id: ID!
    country: String!,
    program: String!,
    length: String!,
    monthlyIncomeRequirement: String!,
    taxation: String!,
    visaFee: String!,
    policeClearance: String!,
    healthInsurance: String!,
  }

  type Income {
    _id: ID!
    income: String!,
    }

    type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    country(countryName: String): [Country]
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Auth
    createVote(_id: String!, techNum: Int!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

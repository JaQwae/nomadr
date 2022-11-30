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
    income: String!
    }

  type Query {
    Country: [Country]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;

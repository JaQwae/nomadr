import { gql } from '@apollo/client';

export const QUERY_COUNTRY = gql`
  query Country($countryName: String!) {
    country(countryName: $countryName) {
      _id
      country
      program
      length
      monthlyIncomeRequirement
      taxation
      visaFee
      policeClearance
      healthInsurance
    }
    }
`;

export const QUERY_ME = gql`
  query me{
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_INCOME = gql`
  query Income{
    Income{
      id
      income
    }
  }
`;

export const QUERY_USER = gql`
  query User{
    User{
  _id
  username
  email
  password
    }
  }
`;
export const QUERY_AUTH = gql`
  query Auth{
    Auth{
  token
  user
    }
  }
`;

export const QUERY_MUTATION = gql`
  query Mutation{
    Mutation{
  createMatchup
  createVote
  addUser
  login
    }
  }
`;

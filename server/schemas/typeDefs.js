const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    picture: String
    date_joined: String!
  }

  type Venue {
    location_name: String!
    address: String!
    up_votes: Int
    drink_name: String
  }
  type Auth{
    token:ID!
    user:User
}
  type Query {
    users: [User]!
    venues:[Venue]!
    user(userid:ID!):User


    
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!,pic:String,bio:String): Auth
    login(email: String!, password: String!): Auth
    removeUser: User

  }
`;

module.exports = typeDefs;

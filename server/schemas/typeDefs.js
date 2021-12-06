const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
type User{
    _id: ID!
    name:String!
    email:String!
    password:String!
    bio:String
    date_joined:String
}

type Venue{
    _id: ID!
    location_name: String!
    address: [String]!
    up_votes: Int
    drink_names: [Drinks]
}
type Recommend {
    _id: ID!
    Drinkid: Venue
    users: Users
}

type Drinks {
    _id: ID!
    drinkName: String!
    RecommendationCount: Int
    Venueid: Venue
    recommendations: Users
    date: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    venues: [Venue]
    drink_names: [Drinks]
    users: [User]
    recommendations: [Recommendations]
    # Define a query with an ID parameter to return a single Class object
    class(id: ID!): Class
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addDrink(drinkName: String!): Drinks
}


`;

module.exports = typeDefs;
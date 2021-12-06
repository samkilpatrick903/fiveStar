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
    drink_names: [String]
    user_drinks:[String]
}

type Auth {
    token: ID!
    user: User
}

type Query{
    me: User
}



`;

module.exports = typeDefs;

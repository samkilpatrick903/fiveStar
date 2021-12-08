const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
type User{
    _id: ID
    name:String!
    email:String!
    password:String!
    recs:[Recommend]
    date_joined:String
}
type Drink{
    _id:ID!
    venue:[String]!
    drinkName:String
    recommendations:[Recommend]!
    date:String
}
type Recommend{
    _id:ID!
    venue_id:Venue!
    drink:Drink
    votes:User!
    count:Int!
}
type Venue{
    _id: ID!
    location_name: String!
    address: [String]!
    up_votes: Int
    drink_names: [String]
    user_drinks:[User]
}




type Auth {
    token: ID!
    user: User
}

type Query{
    me: User
    venues:[Venue]!
    drinks:[Drink]!
    recommends:[Recommend]!
    users:[User]!
    user(userid: ID!):User
    venue(location_name: String!):Venue
    drink(drinkName: String):[Drink]

}

type Mutation {
    addVenue(location_name:String!,address:[String]!,drink_names:[String]!):Venue
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addDrink(drinkName: String!,venue:[String]!): Drink
    addReview(userid:ID!,name:String!,drink:ID!,count:Int!):Drink
}

`;

module.exports = typeDefs;
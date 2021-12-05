const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
type User{
name:String!
email:String!
password:String!
bio:String
date_joined:String
}



`;

module.exports = typeDefs;

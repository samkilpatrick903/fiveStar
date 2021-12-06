const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Venue=require('../models/Venue')
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
  
  },
  Mutation: {
    
  },
};

module.exports = resolvers;

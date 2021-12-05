const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Venue=require('../models/Venue')
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent,{userid})=>{
        return await User.findOne({_id:userid});
    },  
     venues: async () => {
        return Venue.find();
      },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
        const user = await User.create({ name, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
  },
};

module.exports = resolvers;

const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Venue=require('../models/Venue')
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async ()=>{
      return await User.find();
  },
  user: async (parent,{userid})=>{
    return await User.findOne({_id:userid});
},  
   me: async (parent, args, context) => {
  if (context.user) {
    return User.findOne({ _id: context.user._id });
  }
  throw new AuthenticationError('You need to be logged in!');
},
venues:async ()=>{
  return await Venue.find({}).populate(
    "drinks"
  )
},
venue:async (parent,{venueid})=>{
  return await Venue.findOne({_id:venueid})

  
}
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const profile = await User.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;

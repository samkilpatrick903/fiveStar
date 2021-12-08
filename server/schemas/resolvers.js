const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/User");
const Venue = require("../models/Venue");
const Drink = require("../models/Drinks");
const Recommendation = require("../models/Recommend");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { userid }) => {
      return await User.findOne({ _id: userid });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    venues: async () => {
      return await Venue.find({});
    },
    venue: async (parent, { location_name }) => {
      return await Venue.findOne({ location_name: location_name }).populate(
        "user_drinks"
      );
    },
    drink: async (parent, { drinkName }) => {
      return await Drink.findOne({ drinkName: drinkName })
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addVenue: async (parent, args, context) => {
      //! add user context to authenticate
      // if (context.user) {
      //! get rid of userId when we can user the context to our advantage
      const { location_name, address, drink_names } = args;
      const newVenue = await Venue.create({
        location_name: location_name,
        address: address,
        drink_names: drink_names,
      });
			return newVenue;
			// }
			// throw new AuthenticationError('You need to be logged in to do that!');
		},
    addDrink:async(parent,args,context)=>{
      const {drinkName,venue}=args
      const newDrink=await Drink.create({
        drinkName:drinkName,
        venue:venue
      })
      await Venue.findOneAndUpdate(
				{ venue: venue },
				{
					$addToSet: {
						drink_names: [
							 drinkName
            ]
					}
				
				},{ new: true }

			);
      return newDrink
    },
    addReview: async (parent, args, context) => {
			const { userid, name,drink,venue_id,count } = args;
			// if (context.user._id) {
			await Recommendation.create(
				{venue_id: venue_id,
        count:count,
        drink:drink
        },
				
				{ new: true }
			)
      await Drink.findOneAndUpdate(
				{ drink: drink },
				{
					$addToSet: {
						recommendations: [
							name
            ]
					}
				
				},{ new: true }

			);
			// }
			// throw new AuthenticationError('You need to be logged in to do that!');
		},
  
  },
};

module.exports = resolvers;

// router.post("/upvote", (req, res) => {
//   Upvote.findOne({ questionid: req.body.params.questionid })
//     .then((oneVote) => {
//       if (oneVote.votes.filter((user) => req.body.params.userid).length === 1) {
//         Question.updateOne(
//           { _id: req.body.params.questionid },
//           { $inc: { voteCount: -1 } }
//         )
//           .then(() => {
//             Upvote.updateOne(
//               {
//                 questionid: req.body.params.questionid,
//               },
//               {
//                 $pull: {
//                   votes: { user: ObjectId(req.body.params.userid) },
//                 },
//               }
//             ).then(() => console.log("decrement by -1"));
//           })
//           .catch((err) => console.log(err));
//       } else if (
//         oneVote.votes.filter((user) => req.body.params.userid).length === 0
//       ) {
//         Upvote.findOneAndUpdate(
//           {
//             questionid: req.body.params.questionid,
//             "votes.user": { $ne: ObjectId(req.body.params.userid) },
//           },
//           {
//             $push: {
//               votes: { user: ObjectId(req.body.params.userid) },
//             },
//           },
//           { useFindAndModify: false }
//         ).then((oldupvote) => {
//           Downvote.findOne({ questionid: req.body.params.questionid })
//             .then((downvote) => {
//               if (
//                 downvote.votes.filter((user) => req.body.params.userid).length >
//                 0
//               ) {
//                 Downvote.updateOne(
//                   {
//                     questionid: req.body.params.questionid,
//                   },
//                   {
//                     $pull: {
//                       votes: { user: ObjectId(req.body.params.userid) },
//                     },
//                   }
//                 )
//                   .then(() => {
//                     Question.updateOne(
//                       { _id: req.body.params.questionid },
//                       { $inc: { voteCount: 2 } }
//                     )
//                       .then(() => console.log("increment by 2"))
//                       .catch((err) => console.log(err));
//                   })
//                   .catch((err) => console.log(err));
//               } else {
//                 Question.updateOne(
//                   { _id: req.body.params.questionid },
//                   { $inc: { voteCount: 1 } }
//                 )
//                   .then(() => console.log("increment by 1"))
//                   .catch((err) => console.log(err));
//               }
//             })
//             .catch((err) => console.log(err));
//         });
//       }
//     })
//     .catch((err) => console.log(err));
// });

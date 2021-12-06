const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Venue= require('../models/Venue');
const Drinks= require('../models/Drinks');
const Recommendation= require('../models/Recommend');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    venues: async () => {
        return await Venue.find({}).populate('Recommend');
      },
    drink_names: async () => {
        return await Drinks.find({}).populate('Venue');
      },
    users: async () => {
        return await User.find({}).populate('Recommend');
      },
    recommendations: async () => {
        return await Recommendation.find({}).populate('Yomama').populate({
            path: 'Yomama',
            populate: 'YoDaddy'
        });
      }
  
  },
  Mutation: {
    addDrink: async (parent,{drinkName}) => {
        return await Drinks.create({drinkName});
    },

  },
};

module.exports = resolvers;

router.post('/upvote', (req, res) => {

    Upvote.findOne({ questionid: req.body.params.questionid })
        .then(oneVote => {
  
            if (oneVote.votes.filter(user => req.body.params.userid).length === 1) {
  
                Question.updateOne({ _id: req.body.params.questionid },
                    { $inc: { voteCount: -1 } })
                    .then(() => {
  
                        Upvote.updateOne({
                            questionid: req.body.params.questionid,
                        },
                            {
                                $pull: {
                                    votes: { user: ObjectId(req.body.params.userid) }
                                }
                            })
                            .then(() => console.log('decrement by -1'))
                    }
                    )
                    .catch(err => console.log(err))
            }
  
            else if (oneVote.votes.filter(user => req.body.params.userid).length === 0) {
  
                Upvote.findOneAndUpdate({
                    questionid: req.body.params.questionid,
                    'votes.user': { $ne: ObjectId(req.body.params.userid) }
                },
                    {
                        $push: {
                            votes: { user: ObjectId(req.body.params.userid) }
                        }
                    },
                    { useFindAndModify: false }
                )
                    .then(oldupvote => {
                        Downvote.findOne({ questionid: req.body.params.questionid })
                            .then(downvote => {
                                if (downvote.votes.filter(user => req.body.params.userid).length > 0) {
  
  
                                    Downvote.updateOne({
                                        questionid: req.body.params.questionid,
                                    },
                                        {
                                            $pull: {
                                                votes: { user: ObjectId(req.body.params.userid) }
                                            }
                                        })
                                        .then(() => {
                                            Question.updateOne({ _id: req.body.params.questionid },
                                                { $inc: { voteCount: 2 } })
                                                .then(() => console.log('increment by 2')
                                                )
                                                .catch(err => console.log(err))
                                        })
                                        .catch(err => console.log(err))
  
  
                                }
                                else {
                                    Question.updateOne({ _id: req.body.params.questionid },
                                        { $inc: { voteCount: 1 } })
                                        .then(() => console.log('increment by 1')
                                        )
                                        .catch(err => console.log(err))
                                }
                            })
                            .catch(err => console.log(err))
  
                    })
            }
  
        })
        .catch(err => console.log(err))
  })

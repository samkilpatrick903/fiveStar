const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const RecommendSchema = new Schema({
    venue_id: {
        type: ObjectId,
        ref: 'Venue'
    },
    votes: [{
       
            type: ObjectId,
            ref: 'User'
        
    }],
    count:{
    type:Number
    }
  ,
})

const Recommend = mongoose.model('Recommendations', RecommendSchema)
module.exports = Recommend
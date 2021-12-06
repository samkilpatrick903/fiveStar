const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const RecommendSchema = new Schema({
    Venueid: {
        type: ObjectId,
        ref: 'Venue'
    }
    ,
    votes: [{
        user: {
            type: ObjectId,
            ref: 'User'
        }
    }]
})

const Recommend = mongoose.model('Recommendations', RecommendSchema)
module.exports = Recommend
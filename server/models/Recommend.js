const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const RecommendSchema = new Schema({
    drinkle: {
        type: ObjectId,
        ref: 'Drink'
    },
    name:[String],
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
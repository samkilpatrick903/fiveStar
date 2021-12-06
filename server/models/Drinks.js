const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const DrinkSchema = new Schema({
    venue: {
        type: ObjectId,
        ref: 'Venue'
    },
    drinkName: {
        type: String,
        required: true
    },
    RecommendationCount: {
        type: Number
    },
    recommendations: [{
          type: ObjectId ,
          ref:'User'
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

const Drink = mongoose.model('Drink', DrinkSchema);
module.exports = Drink
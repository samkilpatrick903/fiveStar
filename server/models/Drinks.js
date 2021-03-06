const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const DrinkSchema = new Schema({
    venue: [{
        type: String,
        // ref: 'Venue'
    }],
    drinkName: {
        type: String,
        required: true
    },
    location:[String],
    recommendations: [{
          type: ObjectId ,
          ref:'Recommend'
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

const Drink = mongoose.model('Drink', DrinkSchema);
module.exports = Drink
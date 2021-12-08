const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const DrinkSchema = new Schema({
    venue: [{
        type: String
    }],
    drinkName: {
        type: String,
        required: true
    },
    recommendations: [{
          type: String ,
         // ref:'Recommend'
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

const Drink = mongoose.model('Drink', DrinkSchema);
module.exports = Drink
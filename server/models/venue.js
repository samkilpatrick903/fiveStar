const { Schema, model } = require("mongoose");



const venueSchema = new Schema({
  location_name: {
    type: String,
    required: true,
    trim: true,
  },
  address: [
    {
    type: String,
    required: true,
    },
  ],
  up_votes: Number,
  drink_names: [
    {
      type: String,
    },
  ],
  drinkName: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Drinks'
    }
  ]

});

const Venue = model("Venue", venueSchema);

module.exports = Venue;
const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;



const venueSchema = new Schema({
  // Venueid: {
  //   type: ObjectId,
  //   required: true,
  // },
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
  user_drinks: [
    {
      type: String,
      //ref: 'Drink'
    }
  ]

});

const Venue = model("Venue", venueSchema);

module.exports = Venue;
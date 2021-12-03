const { Schema, model } = require("mongoose");



const venueSchema = new Schema({
  location_name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  up_votes: Number,
  down_votes: Number,
  hours: String,

  top_drinks: [
    {
      type: String,
    },
  ],
  all_drinks: [
    {
      type: String,
    },
  ],
});

const Venue = model("Venue", venueSchema);

module.exports = Venue;

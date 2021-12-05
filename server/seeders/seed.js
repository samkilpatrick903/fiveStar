const locationData = require("./venueData.json");
const db = require('../configs/connection');
const  User  = require('../models/User');
const  Venue  = require('../models/Venue');
const userSeeds = require('./userSeeds.json');
// const { default: axios } = require('axios');

db.once('open', async () => {
    await User.deleteMany({});
  
    await User.create(userSeeds);

    await Venue.deleteMany({});
  
    await Venue.create(locationData);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });
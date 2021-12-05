const locationData = require("./venueData.json");
const userSeeds = require('./userSeeds.json');
const db = require('../configs/connection');
const  User  = require('../models/User');
const  Venue  = require('../models/Venue');


db.once('open', async () => {
    await User.deleteMany({});
  
    await User.create(userSeeds);

    await Venue.deleteMany({});
  
    await Venue.create(locationData);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });
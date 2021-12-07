const locationData = require("./venueData.json");
const userSeeds = require('./userSeeds.json');
const drinkSeeds=require('./drinkSeeds.json')
const recSeeds=require('./recommendSeeds.json')

const db = require('../configs/connection');
const  User  = require('../models/User');
const  Venue  = require('../models/Venue');
const Drink=require('../models/Drinks');
const Recommend=require('../models/Recommend')
db.once('open', async () => {
    await User.deleteMany({});
  
    await User.create(userSeeds);
    await Drink.deleteMany({});
  
    // await Drink.create(drinkSeeds);
    await Recommend.deleteMany({});
  
    // await Recommend.create(recSeeds);

    await Venue.deleteMany({});
  
    await Venue.create(locationData);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });
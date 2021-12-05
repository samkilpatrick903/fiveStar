const db = require('../configs/connection');
const  User  = require('../models/User');
const userSeeds = require('./userSeeds.json');
// const { default: axios } = require('axios');

db.once('open', async () => {
    await User.deleteMany({});
  
    await User.create(userSeeds);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });
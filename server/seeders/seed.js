const db = require('../configs/connection');
const { User,Coin, Graph } = require('../models');
const userSeeds = require('./userSeeds.json');
// const { default: axios } = require('axios');

db.once('open', async () => {
    await User.deleteMany({});
  
    const technologies = await User.insertMany(userData);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });
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
    await Drink.deleteMany({});
    await Recommend.deleteMany({});
    await Venue.deleteMany({});

    const users=await User.insertMany(userSeeds);
    const drinks=await Drink.insertMany(drinkSeeds);
    const reviews =await Recommend.insertMany(recSeeds);
    const venues=await Venue.insertMany(locationData);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });
  // const users = await User.insertMany(userSeeds);
	// const threads = await Thread.insertMany(threadSeeds);

	// const posts = await Post.insertMany(postSeeds);
	// console.log(posts)
	// const events = await Event.insertMany(eventSeeds);

	// const comments=await Comment.insertMany(commentSeeds);
	// console.log(comments)
	// for (newUsers of users) {
	// 	// randomly add users to threads

	// 	const tempMembers = threads[Math.floor(Math.random() * threads.length)];

	// 	tempMembers.members.push(newUsers._id);

	// 	await tempMembers.save();

	// 	//randomly add users to event-attentees

	// 	const tempAttendees = events[Math.floor(Math.random() * events.length)];

	// 	tempAttendees.attendees.push(newUsers._id);

	// 	tempMembers.moderator.push(newUsers._id);

	// 	await tempAttendees.save();

	// 	// randomly add a thread for users
	// 	const tempThread = threads[Math.floor(Math.random() * threads.length)];

	// 	newUsers.threads = tempThread._id;

	// 	//.moderator.push(newUsers._id);
	// 	await newUsers.save();

	// 	for(newPost of posts){
	// 		const tempThreadPost=threads[Math.floor(Math.random() * threads.length)];
	
	// 		tempThreadPost.posts.push(newPost._id);
	
	// 		await tempThreadPost.save()
	
	// 		//const tempCommentPost = comments[Math.floor(Math.random() * comments.length)];
	
	// 			//newPost.comments=tempCommentPost._id
	
	// 		//await tempCommentPost.save()
	// 	}}
	// 	console.log('all done!');
	// 	process.exit(0);
	// }); 
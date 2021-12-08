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
    const reviews =await Recommend.insertMany(recSeeds);
    const venues=await Venue.insertMany(locationData);



	for (let i = 0; i < drinkSeeds.length; i++) {
		const {venue,_id ,drinkName} = await Drink.create(drinkSeeds[i]);
		await Venue.findOneAndUpdate(
			{ _id: venue },
			{
				$addToSet: {
					user_drinks: _id
				}
			}
		)
		await Recommend.findOneAndUpdate(
			{drinkle:_id},
			{
				$addToSet:{
					name:drinkName
				}
			}
		)
	}

	

	for (let i = 0; i < locationData.length; i++) {
		const { _id, location_name } = await Venue.create(locationData[i]);
		await Drink.findOneAndUpdate(
			{ venue: _id },
			{
				$addToSet: {
					location: location_name
				}
			}
		);
	}

	// for (let i = 0; i < eventSeeds.length; i++) {
	// 	const { _id, thread } = await Event.create(eventSeeds[i]);
	// 	await Thread.findOneAndUpdate(
	// 		{ title: thread },
	// 		{
	// 			$addToSet: {
	// 				events: _id
	// 			}
	// 		}
	// 	);

		// for (let i = 0; i < attendees.length; i++) {
		// 	await User.findOneAndUpdate(
		// 		{ _id: attendees[i] },
		// 		{
		// 			$addToSet: {
		// 				events: 
		// 			}
		// 		}
		// 	);
		// }
	//}

	// for (let i = 0; i < commentPostSeeds.length; i++) {
	// 	const { _id, post } = await Comment.create(commentPostSeeds[i]);
	// 	await Post.findOneAndUpdate(
	// 		{ _id: post },
	// 		{
	// 			$addToSet: {
	// 				comments: _id
	// 			}
	// 		}
	// 	);
	// }

	// for (let i = 0; i < commentEventSeeds.length; i++) {
	// 	const { _id, event } = await Comment.create(commentEventSeeds[i]);
	// 	await Event.findOneAndUpdate(
	// 		{ _id: event },
	// 		{
	// 			$addToSet: {
	// 				comments: _id
	// 			}
	// 		}
	// 	);
	// }
	// for (newUsers of users) {
	// 	// randomly add users to threads

	// 	const tempMembers = reviews[Math.floor(Math.random() * reviews.length)];

	// 	tempMembers.votes.push(newUsers._id);

	// 	await tempMembers.save();
	// }
	
	// 	for(newDrink of drinks){
	// 		const tempThreadPost=venues[Math.floor(Math.random() * venues.length)];
	// 		// const tempRec=reviews[Math.floor(Math.random() * reviews.length)];

	// 		tempThreadPost.user_drinks.push(newDrink._id);
			
	// 		// tempRec.drinkle.push(newDrink._id)

	// 		// await tempRec.save()
	// 		await tempThreadPost.save()
	// 	}
	// 	for(newVenue of venues){

	// 		const tempThreadPost=drinks[Math.floor(Math.random() * drinks.length)];
	
	// 		tempThreadPost.venue.push(newVenue._id);
	
	// 		await tempThreadPost.save()
	// 	}

		// 	const tempCommentPost = comments[Math.floor(Math.random() * comments.length)];
	
		// 		newPost.comments=tempCommentPost._id
	
		// 	await tempCommentPost.save()
		// }
		console.log('all done!');
		process.exit(0);
	}); 
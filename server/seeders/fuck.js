
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
const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//* Set up validation for schema

var validateEmail = function(email) {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const userSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Name is required',
		unique: true
	},
	email: {
		type: String,
		trim: true,
		required: 'Email address is required',
		unique: true,
		validate: [ validateEmail, 'Please use a valid email address' ],
	},
	password: {
		type: String,
		minLength: [ 6, 'You need a longer password' ],
		required: 'You must provide a valid password',
		trim: true
	},
	picture: {
		type: String
	},
	bio: {
		type: String,
		maxLength: [ 255, 'Your bio can only be 255 characters long' ]
	},
	date_joined: {
        type: Date,
        default: Date.now,
		get: (timestamp) => dateFormat(timestamp)
	},

});

userSchema.pre('save', function(next) {
	var user = this;
	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();
	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.isCorrectPassword = async function(candidatePassword, cb) {
	await bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

const User = mongoose.model('User', userSchema);

module.exports = User;


// {
//     "id": 1
//     "email": "maryloohoopoo@gmail.com"
//     "username": "MaryLouHoo",
//     "password": "poo",
//     "reviews": [
//             "review_id": 345,
//             "review_id": 5462,
//         ]
//     "saved_drinks":
// }
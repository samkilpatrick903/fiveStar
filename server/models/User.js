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
		//minLength: [ 6, 'You need a longer password' ],
		required: 'You must provide a valid password',
		//trim: true
	},
	picture: {
		type: String
	},
	rec: [{
		type: ObjectId,
		ref:'Recommend'
	}],
	date_joined: {
        type: Date,
        default: Date.now,
		get: (timestamp) => dateFormat(timestamp)
	},

});

userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
	  const saltRounds = 10;
	  this.password = await bcrypt.hash(this.password, saltRounds);
	}
  
	next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
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
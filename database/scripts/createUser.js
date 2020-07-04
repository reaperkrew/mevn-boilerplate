/*
 * Example script to create a user
 * You should fill in your own data
 *
 * */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const passwordSalt = bcrypt.genSaltSync(10, 'b');
const password = 'YourPassword45$%Here';
const passwordHash = bcrypt.hashSync(password, passwordSalt);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const user = new User({
  firstName: 'John',
  lastName: 'Smith',
  email: 'johnsmith@someemail.com',
  passwordHash,
});

user.save();

require('dotenv').config();
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const { User } = require('../models');

const winston = require('../../config/winston');

const doLogin = async (email, password) => {
  let connection;
  try {
    connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true, useUnifiedTopology: true,
    });
    const user = await User.findOne({ email: { $regex: new RegExp(email, 'i') } }).exec();
    if (!user) {
      return null;
    }
    const match = await bcrypt.compare(password, user.passwordHash);
    if (match) return user;
  } catch (err) {
    winston.error('Caught error when attempting to retrieve user');
    winston.error(err);
    return null;
  } finally {
    if (connection) {
      try {
        connection.close();
      } catch (err) {
        winston.error('Caught an error in finally block of doLogin');
        winston.error(err);
      }
    }
  }
  return null;
};

module.exports = {
  doLogin,
};

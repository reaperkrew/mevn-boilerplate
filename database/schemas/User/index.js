const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = new Schema({
  firstName: String,
  lastName: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email: String,
  passwordHash: String,
});

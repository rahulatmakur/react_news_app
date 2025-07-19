const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Comment = require('./Comment'); // Import Comment model

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Delete associated comments when a user is deleted
userSchema.pre('remove', async function (next) {
  await Comment.deleteMany({ userId: this._id });
  next();
});

module.exports = mongoose.model('User', userSchema);

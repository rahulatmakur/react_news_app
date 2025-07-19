const mongoose = require('mongoose');
const Comment = require('./Comment'); // Import Comment model

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  isBreaking: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Delete associated comments when a news post is deleted
newsSchema.pre('deleteOne', { document: true, query: false }, async function (next) {
  await Comment.deleteMany({ newsId: this._id });
  next();
});

module.exports = mongoose.model('News', newsSchema);

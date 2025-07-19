const express = require('express');
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.get('/:newsId', async (req, res) => {
  const comments = await Comment.find({ newsId: req.params.newsId }).populate('userId', 'username');
  res.json(comments);
});

router.post('/', authMiddleware, async (req, res) => {
  const { newsId, content } = req.body;
  try {
    const comment = new Comment({ newsId, userId: req.userId, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

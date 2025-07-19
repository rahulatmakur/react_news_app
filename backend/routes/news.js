const express = require('express');
const News = require('../models/News');
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

router.get('/', async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.json(news);
});

router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { title, content, isBreaking } = req.body;
  try {
    const news = new News({ title, content, isBreaking });
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: 'News not found' });
    await news.deleteOne(); // Triggers the pre('deleteOne') middleware
    res.json({ message: 'News post deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

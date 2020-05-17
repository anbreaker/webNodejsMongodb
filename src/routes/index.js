const express = require('express');

// Route management
const router = express.Router();

// Created Routes of server
router.get('/', (req, res) => {
  res.send('Index');
});

// Route About
router.get('/about', (req, res) => {
  res.send('about');
});

module.exports = router;

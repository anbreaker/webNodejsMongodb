const express = require('express');

// Route management
const router = express.Router();

// Created Routes of server
router.get('/notes', (req, res) => {
  res.send('Notes from database');
});

module.exports = router;

// https://www.youtube.com/watch?v=-bI0diefasA
// 59.00

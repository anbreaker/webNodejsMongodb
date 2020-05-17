const express = require('express');

// Route management
const router = express.Router();

// Created Routes of server
router.get('/users/signin', (req, res) => {
  res.send('SingIng');
});

router.get('/users/signup', (req, res) => {
  res.send('Form of authetication');
});

module.exports = router;

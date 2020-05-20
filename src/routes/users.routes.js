const express = require('express');

// Route management
const router = express.Router();

// Created Routes of server
router.get('/users/signin', (req, res) => {
  // res.send('SingIng');
  res.render('users/signin');
});

router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

module.exports = router;

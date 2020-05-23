// Of Express only Router
const {Router} = require('express');

// Route management
const router = Router();

// Import controllers
const {
  renderSingUpForm,
  renderSinginForm,
  signup,
  signin,
  logout,
} = require('../controllers/users.controller.js');

// Created Routes of server
router.get('/users/signup', renderSingUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSinginForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;

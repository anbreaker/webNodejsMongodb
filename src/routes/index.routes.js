// Of Express only Router
const {Router} = require('express');

// Route management
const router = express.Router();

// Created Routes of server
router.get('/', (req, res) => {
  // res.send('Index');
  res.render('index');
});

// Route About
router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;

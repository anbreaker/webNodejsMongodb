const express = require('express');

// Route management
const router = express.Router();

// Created Routes of server

router.get('/notes/add', (req, res) => {
  res.render('notes/new-note');
});

// Path to receive data
router.post('/notes/new-note', (req, res) => {
  // console.log(req.body);
  const {title, description} = req.body;

  // Validate inputs
  const errors = [];
  if (!title) {
    errors.push({text: 'Please Write a Title'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }

  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description,
    });
  } else {
    res.send('ok');
  }

  res.send('ok');
});

router.get('/notes', (req, res) => {
  res.send('Notes from database');
});

module.exports = router;

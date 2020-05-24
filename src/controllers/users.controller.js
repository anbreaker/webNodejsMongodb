// Created Objetc of Routes
const usersCtrl = {};

const passport = require('passport');

// Import Sechema User
const User = require('../models/User');

// Created Routes of server

// Method Control Get
usersCtrl.renderSingUpForm = (req, res) => {
  res.render('users/signup');
};

// Method Control Post
usersCtrl.signup = async (req, res) => {
  // console.log(req.body);
  let errors = [];
  const {name, email, password, confirm_password} = req.body;

  if (password != confirm_password) {
    errors.push({text: 'Passwords do not match.'});
  }

  if (password.length < 4) {
    errors.push({text: 'Password must be at least 4 characteres.'});
  }

  if (errors.length > 0) {
    res.render('users/signup', {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({email}).lean();
    if (emailUser) {
      req.flash('error_msg', 'This email is already in use.');
      res.redirect('/users/signup');
    } else {
      const newUser = new User({name, email, password});

      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'Your are registered!.');
      res.redirect('/users/signin');
    }
  }
};

// Method Control Get
usersCtrl.renderSinginForm = (req, res) => {
  res.render('users/signin');
};

// Loggin Method Control Post
usersCtrl.signin = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true,
});

// Method Control Get
usersCtrl.logout = (req, res) => {
  // res.send('logout');
  req.logout();
  req.flash('success_msg', 'You are logged out now.');
  res.redirect('/users/signin');
};

module.exports = usersCtrl;

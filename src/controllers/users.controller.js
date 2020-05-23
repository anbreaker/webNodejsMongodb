// Created Objetc of Routes
const usersCtrl = {};

// Created Routes of server
usersCtrl.renderSingUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.signup = (req, res) => {
  res.send('singUp');
};

usersCtrl.renderSinginForm = (req, res) => {
  res.render('users/signin');
};

// Loggin
usersCtrl.signin = (req, res) => {
  res.send('singIn');
};

usersCtrl.logout = (req, res) => {
  res.send('logout');
};

module.exports = usersCtrl;

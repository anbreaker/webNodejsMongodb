// Created Objetc of Routes
const indexCtrl = {};

// Created Routes of server
indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

module.exports = indexCtrl;

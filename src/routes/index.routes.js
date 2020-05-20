// Of Express only Router
const {Router} = require('express');

// Route management
const router = Router();

// Import controllers
const {renderIndex, renderAbout} = require('../controllers/index.controller');

// Of Controllers go to Routes of server
router.get('/', renderIndex);
router.get('/', renderAbout);

module.exports = router;

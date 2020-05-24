const {Router} = require('express');

// Route management
const router = Router();

// Import controllers & Created Routes of server
const {
  renderNotesForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNotes,
  deleteNote,
} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

// Of Controllers go to Routes of server
// New Notes, acces to form
router.get('/notes/add', isAuthenticated, renderNotesForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

// Get All Notes
router.get('/notes', isAuthenticated, renderNotes);

//Edit Notes
// Show Data
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
// Change Data, put is to update
router.put('/notes/edit/:id', isAuthenticated, updateNotes);

// Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;

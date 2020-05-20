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
} = require('../controllers/notes.controller');

// Of Controllers go to Routes of server
// New Notes
router.get('/notes/add', renderNotesForm);

router.post('/notes/add', createNewNote);

// Get All Notes
router.get('/notes', renderNotes);

//Edit Notes
// Show Data
router.get('/notes/edit/:id', renderEditForm);
// Change Data, put is to update
router.put('/notes/edit/:id', updateNotes);

// Delete Notes
router.delete('notes/delete/:id');

module.exports = router;

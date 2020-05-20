// Created Objetc of Routes
const notesCtrl = {};

// Created Routes of server
notesCtrl.renderNotesForm = (req, res) => {
  // res.render('index');
  res.send('Note add');
};

notesCtrl.createNewNote = (req, res) => {
  res.send('new Note');
};

notesCtrl.renderNotes = (req, res) => {
  res.send('Render Notes');
};

notesCtrl.renderEditForm = (req, res) => {
  res.send('Render Edit Form');
};

notesCtrl.updateNotes = (req, res) => {
  res.send('Update Notes');
};

notesCtrl.deleteNotes = (req, res) => {
  res.send('Deleting Note');
};

module.exports = notesCtrl;

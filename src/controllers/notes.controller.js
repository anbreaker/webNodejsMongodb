// Model of Schema
const Note = require('../models/Notes');

// Created Objetc of Routes
const notesCtrl = {};

// Created Routes of server
notesCtrl.renderNotesForm = (req, res) => {
  // res.render('index');
  res.send('Note add');
};

notesCtrl.createNewNote = async (req, res) => {
  //Save Notes
  const {title, description} = req.body;
  const newNote = new Note({title, description});
  console.log(newNote);
  await newNote.save();

  res.send('new Note');
};

notesCtrl.renderNotes = async (req, res) => {
  // res.send('Note add');
  const notes = await Note.find();
  res.render('notes/all-notes', {notes});
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

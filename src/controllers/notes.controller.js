// Model of Schema
const Note = require('../models/Notes');

// Created Objetc of Routes
const notesCtrl = {};

// Created Routes of server
notesCtrl.renderNotesForm = (req, res) => {
  res.render('notes/new-note');
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
  // el tipo de objeto que devuelve mongoose:
  // https://mongoosejs.com/docs/tutorials/lean.html
  // al usar el .lean() lo pasa a formato JSON
  const notes = await Note.find().lean();
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

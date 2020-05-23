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

  // res.send('new Note');
  res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
  // res.send('Note add');
  // el tipo de objeto que devuelve mongoose:
  // https://mongoosejs.com/docs/tutorials/lean.html
  // al usar el .lean() lo pasa a formato JSON
  const notes = await Note.find().lean();
  res.render('notes/all-notes', {notes});
};

notesCtrl.renderEditForm = async (req, res) => {
  // res.send('Render Edit Form');
  const note = await Note.findById(req.params.id).lean();
  // console.log(note);
  res.render('notes/edit-note', {note});
};

notesCtrl.updateNotes = async (req, res) => {
  // console.log(req.body);
  // res.send('Update Notes');
  const {title, description} = req.body;
  await Note.findByIdAndUpdate(req.params.id, {title, description});
  res.redirect('/notes');
};

notesCtrl.deleteNote = async (req, res) => {
  // For delte note
  // console.log(req.params.id); --> Exist id
  await Note.findByIdAndDelete(req.params.id);
  // res.send('Deleting Note');
  res.redirect('/notes');
};

module.exports = notesCtrl;

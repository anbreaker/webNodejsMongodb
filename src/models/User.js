const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
  },

  {
    timestamps: true,
  }
);

// encryption password user
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Comparation encryption password of user with pasword without cript
UserSchema.methods.matchPassword = async function (password) {
  // return true or false
  return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);

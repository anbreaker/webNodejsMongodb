const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
  },

  {
    timestamps: true,
  }
);

// encryption password user
UserSchema.methods.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await passbcrypt.hash(password, salt);
};

// Comparation encryption password of user with pasword without cript
UserSchema.methods.matchPassword = function (password) {
  // return true or false
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema);

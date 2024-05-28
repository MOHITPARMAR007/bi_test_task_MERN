const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
});

module.exports = mongoose.model('User', UserSchema);

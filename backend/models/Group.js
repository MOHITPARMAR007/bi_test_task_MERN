const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
});

module.exports = mongoose.model('Group', GroupSchema);

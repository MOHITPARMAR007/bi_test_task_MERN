const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: String,
  members: [{ type: String }],
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
});

module.exports = mongoose.model('Group', GroupSchema);
   
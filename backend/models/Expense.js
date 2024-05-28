const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  description: String,
  amount: Number,
  paidBy: { type: Schema.Types.ObjectId, ref: 'User' },
  sharedWith: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
});

module.exports = mongoose.model('Expense', ExpenseSchema);

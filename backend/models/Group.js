const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  memberEmails: {
    type: [String],
    required: true,
    validate: [arrayLimit, '{PATH} exceeds the limit of 50']
  },
    foodExpense: {
      type: Number,
      required: true,
      min: 0
    },
    travelExpense: {
      type: Number,
      required: true,
      min: 0
    },
    travelExpense: {
      type: Number,
      required: true,
      min: 0
    },
    otherExpense: {
      type: Number,
      required: true,
      min: 0
    },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Custom validator to limit the number of member emails
function arrayLimit(val) {
  return val.length <= 50;
}

module.exports = mongoose.model('Group', GroupSchema);

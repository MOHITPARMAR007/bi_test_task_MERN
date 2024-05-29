const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');
const Group = require('../models/Group');

// Add Expense
router.post('/add', async (req, res) => {
  try {
    const { description, amount, paidBy, sharedWith, groupId } = req.body;
    const expense = new Expense({ description, amount, paidBy, sharedWith, group: groupId });
    await expense.save();

    // Add expense to group
    const group = await Group.findById(groupId);
    group.expenses.push(expense._id);
    await group.save();

    res.status(201).send('Expense added');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

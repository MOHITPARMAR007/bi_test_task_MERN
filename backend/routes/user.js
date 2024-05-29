const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Group = require('../models/Group');
const nodemailer = require('nodemailer');
// const useAuth0 = require('')
// Registration
router.post('/register', async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, password } = req.body;
    const user = new User({ name, email, phone, password });
    await user.save();
    console.log('JBDFJ');
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create Group
router.post('/group', async (req, res) => {
  try {
    const { name, memberEmails } = req.body;
    const group = await new Group({ name });    
    console.log(req.body);
    
    // const members = await User.find({ email:memberEmails  });
    // const members = memberEmails.split(',');
    // console.log('jdh');
    // group.members.push(...members.map(member => member._id));
    
    const createdGp = await group.save(); 
    console.log(createdGp.id);
    res.status(201).send('Group created');

    // Send invitation emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sr982729@gmail.com',
        pass: 'lgyn tyrr krzk wkop',
      },
    });
    console.log('JBH');
    for (const member of memberEmails) {
      const mailOptions = {
        from: 'expensemanager@gmail.com',
        to: member,
        subject: 'Group Invitation',
        html: `<h2>$thanks for registration</h2>
                    <h4>Plz click on link to join group</h4>
                    <a href="http://localhost:5000/api/users/joinGroup?email=${member}">Join Group</a>`,

      };
      console.log(memberEmails[0]);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/joinGroup',(req,re)=>{
  try {
    console.log(req.query.email);
  } catch (error) {
    
  }
})

module.exports = router;

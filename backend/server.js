const User = require('./models/User'); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');
const cors=require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const dbUrl= process.env.dbUrl
mongoose.connect(dbUrl)
    .then(() => {
        console.log('Connected to MongoDB successfully');
        // Add your code to execute after successful connection here
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173'
  }));
  

// Passport config
passport.use(new OAuth2Strategy({
  authorizationURL: 'https://provider.com/oauth2/authorize',
  tokenURL: 'https://provider.com/oauth2/token',
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: 'http://localhost:3000/auth/callback',
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ oauthID: profile.id }, function (err, user) {
    return cb(err, user);
  });
}));

app.use(passport.initialize());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
// Middleware to set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.options('*', cors());
const port = process.env.PORT | 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

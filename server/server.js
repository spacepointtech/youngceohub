// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Questionnaire = require('./models/Questionnaire');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yce', { useNewUrlParser: true, useUnifiedTopology: true });

// Signup Route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.json({ userExists: true });
  } else {
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ userExists: false });
  }
});

// Questionnaire Route
app.post('/api/questionnaire', async (req, res) => {
  const questionnaire = new Questionnaire(req.body);
  await questionnaire.save();
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

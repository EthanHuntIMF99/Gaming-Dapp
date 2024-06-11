// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/gamedapp', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  discordId: String,
  walletAddress: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { discordId, walletAddress } = req.body;
  const user = new User({ discordId, walletAddress });
  await user.save();
  res.send('User registered');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

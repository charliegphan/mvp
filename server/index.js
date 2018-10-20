require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { add, fetch, update } = require('../database/controllers');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));

app.post('/api/workouts', (req, res) => {
  add(req.body, res);
});

app.get('/api/workouts', (req, res) => {
  fetch(req.query.search, res);
});

app.patch('/api/workouts', (req, res) => {
  update(req.body.workoutName, req.body, res);
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('listening on port 8080');
});

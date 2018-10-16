const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected to mongodb');
});

const workoutSchema = new mongoose.Schema({
  workoutName: String,
  squat: Number,
  bench: Number,
  deadlift: Number,
  ohp: Number,
  completion: [],
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = { Workout };

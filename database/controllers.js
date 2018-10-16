const { Workout } = require('./database.js');

const add = (workout, res) => {
  const newWorkout = new Workout({
    workoutName: workout.workoutName,
    squat: workout.squat,
    bench: workout.bench,
    deadlift: workout.deadlift,
    ohp: workout.ohp,
    completion: workout.completion,
  });

  Workout.countDocuments({ workoutName: workout.workoutName }, (err, count) => {
    if (err) {
      console.log(err);
    }

    if (count > 0) {
      res.sendStatus(409);
    } else {
      newWorkout.save((error) => {
        if (error) {
          console.log(error);
        }
        res.sendStatus(201);
      });
    }
  });
};

const fetch = (workoutName, res) => {
  Workout.findOne({ workoutName }, (err, doc) => {

  });
};

module.exports = { add, fetch };

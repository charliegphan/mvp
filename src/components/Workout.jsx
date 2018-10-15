import React from 'react';
import styles from '../../styles/Workout.css';

import workoutConfig from '../../6GOD_config.js';

const Workout = ({
  config,
  day,
  week,
  weekNumber,
  squat,
  bench,
  deadlift,
  ohp,
  completion,
  workoutType,
  handleCompletionChange
}) => {
  let progression;
  let reps;

  if (config === 'linearProgression') {
    progression = workoutConfig.linearProgression;
    reps = workoutConfig.linearReps;
  } else {
    progression = workoutConfig.periodicProgression;
    reps = workoutConfig.periodicReps;
  }

  let workout;

  if (workoutType === 'push') {
    workout = { 1: squat, 2: ohp };
  } else {
    workout = { 1: deadlift, 2: bench };
  } 

  let style;
  if (completion === 0) {
    style = styles.workout0;
  } else if (completion === 1) {
    style = styles.workout1;
  } else if (completion === 2) {
    style = styles.workout2;
  } else {
    style = styles.workout3;
  }

  return (
    <div 
      onClick={() => handleCompletionChange(weekNumber, day)}
    >
      <table className={style}>
        <tr>
          <th>reps</th>
          <th>sets</th> 
          <th>weight</th>
        </tr>

        <tr>
          <td>4</td>
          <td>{reps[day]}</td>
          <td>{Math.ceil((workout[1] * progression[day]) / 5) * 5}</td>
        </tr>

        <tr>
          <td>4</td>
          <td>{reps[day]}</td>
          <td>{Math.ceil((workout[2] * progression[day]) / 5) * 5}</td>
        </tr>

        <tr>
          <td>4</td>
          <td>5</td>
          <td></td>
        </tr>

        <tr>
          <td>3</td>
          <td>10</td>
          <td></td>
        </tr>

        <tr>
          <td>3</td>
          <td>10</td>
          <td></td>
        </tr>

        <tr>
          <td>3</td>
          <td>10</td>
          <td></td>
        </tr>

        <tr>
          <td>3</td>
          <td>10</td>
          <td></td>
        </tr>  
      </table>
    </div>
  );
}

export default Workout;
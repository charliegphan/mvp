import React from 'react';

import PushDay from './PushDay.jsx';
import PullDay from './PullDay.jsx';
import Workout from './Workout.jsx';

import styles from '../../styles/Week.css';

const Week = ({ 
  workoutType,
  week,
  day,
  weekNumber,
  config,
  squat,
  bench,
  deadlift,
  ohp,
  handleCompletionChange,
}) => {
  let workout;
  if (workoutType === 'pull') {
    workout = <PullDay />;
  } else {
    workout = <PushDay />;
  }

  return (
    <div className={styles.week}>
      <p>day {weekNumber + 1}</p>
      {workout}
      {week.map((completion, i) => {
        return (
          <Workout
            workoutType={workoutType}
            config={config}
            weekNumber={weekNumber}
            day={i}
            squat={squat}
            bench={bench}
            deadlift={deadlift}
            ohp={ohp}
            completion={completion}
            handleCompletionChange={handleCompletionChange}
          />);
      })}
    </div>
  );
};

export default Week;

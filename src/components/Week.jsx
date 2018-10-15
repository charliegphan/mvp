import React from 'react';

import PushDay from './PushDay.jsx';
import PullDay from './PullDay.jsx';
import Workout from './Workout.jsx';

import styles from '../../styles/Week.css';

const Week = ({ workoutType, week }) => {
  let day;
  if (workoutType === 'pull') {
    day = <PullDay />;
  } else {
    day = <PushDay />;
  }

  return (
    <div className={styles.week}>
      {day}
      {week.map((completion) => {
        return <Workout />;
      })}
    </div>
  );
};

export default Week;

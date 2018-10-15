import React from 'react';

import PushDay from './PushDay.jsx';
import PullDay from './PullDay.jsx';
import Workout from './Workout.jsx';

import styles from '../../styles/Week.css';

const Week = ({ 
  workoutType,
  week,
  config,
  squat,
  bench,
  deadlift,
  ohp 
}) => {
  let day;
  let props;
  if (workoutType === 'pull') {
    day = <PullDay />;
  } else {
    day = <PushDay />;
  }

  return (
    <div className={styles.week}>
      {day}
      {week.map((completion, i) => {
        return <Workout workoutType={workoutType} config={config} day={i} squat={squat} bench={bench} deadlift={deadlift} ohp={ohp} completion={completion}/>;
      })}
    </div>
  );
};

export default Week;

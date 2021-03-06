import React from 'react';

const Inputs = ({ 
  squat, 
  bench, 
  deadlift,
  ohp,
  handleSquatChange,
  handleBenchChange,
  handleDeadliftChange,
  handleOHPChange,
  handleWorkoutNameChange,
  workoutName,
  saveWorkout,
}) => {
  return (
    <div>
      <form>
        <div>
          <label>
            workout name
            <input
              type="text"
              value={workoutName}
              onChange={e => handleWorkoutNameChange(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            squat
            <input
              type="number"
              value={squat}
              onChange={e => handleSquatChange(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            bench
            <input
              type="number"
              value={bench}
              onChange={e => handleBenchChange(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            deadlift
            <input
              type="number"
              value={deadlift}
              onChange={e => handleDeadliftChange(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            OHP
            <input
              type="number"
              value={ohp}
              onChange={e => handleOHPChange(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
}
export default Inputs;

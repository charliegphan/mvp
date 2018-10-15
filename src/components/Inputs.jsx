import React from 'react';

const Inputs = ({ 
  squat, 
  bench, 
  deadlift,
  handleSquatChange,
  handleBenchChange,
  handleDeadliftChange,
}) => {
  return (
    <div>
      <form>
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

      </form>
    </div>
  );
}
export default Inputs;

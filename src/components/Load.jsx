import React from 'react';

const Load = ({ handleSearchChange, fetchWorkout, search }) => (
  <div>
    <span>Load existing workout:</span>
    <input 
      onChange={e => handleSearchChange(e.target.value)} 
      value={search}
    />
    <div>
      <button
        type="button"
        onClick={() => fetchWorkout()}
      >
        Load workout
      </button>
    </div>
  </div>
);

export default Load;

import React from 'react';

const Load = ({ handleSearchChange }) => (
  <div>
    <span>Load existing workout:</span>
    <input onChange={e => handleSearchChange(e.target.value)} />
    <div>
      <button type="button">Load workout</button>
    </div>
  </div>
);

export default Load;

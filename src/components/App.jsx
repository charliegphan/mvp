import React from 'react';

import AddTripForm from './AddTripForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>tripsit.io</h1>
        <AddTripForm />
      </div>
    );
  }
}

export default App;

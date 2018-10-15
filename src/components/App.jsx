import React from 'react';

import Inputs from './Inputs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squat: 0,
      bench: 0,
      deadlift: 0,
    };

    this.handleSquatChange = this.handleSquatChange.bind(this);
    this.handleBenchChange = this.handleBenchChange.bind(this);
    this.handleDeadliftChange = this.handleDeadliftChange.bind(this);
  }

  handleSquatChange(squat) {
    if (squat === null) {
      this.setState({ squat: 0 });
    } else {
      this.setState({ squat: parseInt(squat, 10) });
    }
  }

  handleBenchChange(bench) {
    this.setState({ bench: parseInt(bench, 10) });
  }

  handleDeadliftChange(deadlift) {
    this.setState({ deadlift: parseInt(deadlift, 10) });
  }

  render() {
    return (
      <div>
        <Inputs
          {...this.state}
          handleSquatChange={this.handleSquatChange}
          handleBenchChange={this.handleBenchChange}
          handleDeadliftChange={this.handleDeadliftChange}
        />
      </div>
    );
  }
}

export default App;

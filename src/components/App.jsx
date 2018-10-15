import React from 'react';

import Inputs from './Inputs.jsx';
import PushDay from './PushDay.jsx';
import PullDay from './PullDay.jsx';

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
        <div>
          <h1>6GOD</h1>
          <Inputs
            {...this.state}
            handleSquatChange={this.handleSquatChange}
            handleBenchChange={this.handleBenchChange}
            handleDeadliftChange={this.handleDeadliftChange}
          />
        </div>

        <div>
          <PushDay />
          <PullDay />
          <PushDay />
          <PullDay />
        </div>

      </div>
    );
  }
}

export default App;

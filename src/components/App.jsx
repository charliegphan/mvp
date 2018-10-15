import React from 'react';

import Inputs from './Inputs.jsx';
import Week from './Week.jsx';

import styles from '../../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      squat: 0,
      bench: 0,
      deadlift: 0,
      ohp: 0,
      completion: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
    };

    this.handleSquatChange = this.handleSquatChange.bind(this);
    this.handleBenchChange = this.handleBenchChange.bind(this);
    this.handleDeadliftChange = this.handleDeadliftChange.bind(this);
    this.handleOHPChange = this.handleOHPChange.bind(this);
  }

  handleSquatChange(squat) {
    // console.log(squat);
    this.setState({ squat: parseInt(squat, 10) });
  }

  handleBenchChange(bench) {
    this.setState({ bench: parseInt(bench, 10) });
  }

  handleDeadliftChange(deadlift) {
    this.setState({ deadlift: parseInt(deadlift, 10) });
  }

  handleOHPChange(ohp) {
    this.setState({ ohp: parseInt(ohp, 10) });
  }

  render() {
    const {
      completion,
      squat,
      bench,
      deadlift,
      ohp,
    } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <div>
            <h1>6GOD</h1>
          </div>

          <Inputs
            {...this.state}
            handleSquatChange={this.handleSquatChange}
            handleBenchChange={this.handleBenchChange}
            handleDeadliftChange={this.handleDeadliftChange}
            handleOHPChange={this.handleOHPChange}
          />
        </div>

        <div>
          <Week
            week={0}
            week={completion[0]}
            config={'linearProgression'}
            workoutType={'push'}
            {...this.state}
          />

          <Week
            week={0}
            week={completion[0]}
            config={'linearProgression'}
            workoutType={'pull'}
            {...this.state}
          />
        </div>

      </div>
    );
  }
}

export default App;


// <Week 
// workoutType={'pull'} 
// week={completion[1]} 
// config={'linearProgression'} 
// />

// <Week 
// workoutType={'push'} 
// week={completion[2]} 
// config={'periodicProgression'} 
// />

// <Week 
// workoutType={'pull'} 
// week={completion[3]} 
// config={'periodicProgression'} 
// />
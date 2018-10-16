import React from 'react';
import axios from 'axios';

import Inputs from './Inputs.jsx';
import Week from './Week.jsx';
import Audio from './Audio.jsx';

import styles from '../../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      preloaded: false,
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
    this.handleCompletionChange = this.handleCompletionChange.bind(this);
    this.handleWorkoutNameChange = this.handleWorkoutNameChange.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
  }

  handleSquatChange(squat) {
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

  handleWorkoutNameChange(workoutName) {
    this.setState({ workoutName });
  }

  saveWorkout() {
    const {
      workoutName,
      squat,
      bench,
      deadlift,
      ohp,
      completion,
    } = this.state;

    axios.post('/api/workouts', {
      workoutName,
      squat,
      bench,
      deadlift,
      ohp,
      completion,
    }).then(response => console.log(response))
      .catch(err => console.log(err));
  }

  handleCompletionChange(week, day) {
    const { completion } = this.state;
    const completionCopy = completion.map(arr => arr);

    completionCopy[week][day] += 1;
    if (completionCopy[week][day] > 3) {
      completionCopy[week][day] = 0;
    }

    this.setState({ completion: completionCopy });
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
          <Audio/>

          <Inputs
            {...this.state}
            handleSquatChange={this.handleSquatChange}
            handleBenchChange={this.handleBenchChange}
            handleDeadliftChange={this.handleDeadliftChange}
            handleOHPChange={this.handleOHPChange}
            handleWorkoutNameChange={this.handleWorkoutNameChange}
            saveWorkout={this.saveWorkout}
          />
        </div>

        <div>
          <Week
            weekNumber={0}
            week={completion[0]}
            config={'linearProgression'}
            workoutType={'push'}
            handleCompletionChange={this.handleCompletionChange}
            {...this.state}
          />

          <Week
            weekNumber={1}
            week={completion[1]}
            config={'linearProgression'}
            workoutType={'pull'}
            handleCompletionChange={this.handleCompletionChange}
            {...this.state}
          />

          <Week
            weekNumber={2}
            week={completion[2]}
            config={'periodicProgression'}
            workoutType={'push'}
            handleCompletionChange={this.handleCompletionChange}
            {...this.state}
          />

          <Week
            weekNumber={3}
            week={completion[3]}
            config={'periodicProgression'}
            workoutType={'pull'}
            handleCompletionChange={this.handleCompletionChange}
            {...this.state}
          />
        </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';

import Inputs from './Inputs.jsx';
import Week from './Week.jsx';
import Audio from './Audio.jsx';
import Load from './Load.jsx';

import styles from '../../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      search: '',
      preloaded: false,
      exists: false,
      added: false,
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
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.fetchWorkout = this.fetchWorkout.bind(this);
  }

  handleSquatChange(squat) {
    if (squat === '') {
      this.setState({ squat: 0 });
    }
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

  handleCompletionChange(week, day) {
    const { completion } = this.state;
    const completionCopy = completion.map(arr => arr);

    completionCopy[week][day] += 1;
    if (completionCopy[week][day] > 3) {
      completionCopy[week][day] = 0;
    }

    this.setState({ completion: completionCopy });
  }

  handleSearchChange(search) {
    this.setState({ search });
  }

  updateWorkout() {
    const {
      workoutName,
      squat,
      bench,
      deadlift,
      ohp,
      completion,
    } = this.state;

    axios.patch('/api/workouts', {
      workoutName,
      squat,
      bench,
      deadlift,
      ohp,
      completion,
    }).then((response) => {
    })
  }

  fetchWorkout() {

    const { search } = this.state;

    axios.get('/api/workouts', {
      params: {
        search,
      },
    })
      .then((response) => {
        this.setState({
          search: '',
          preloaded: true,
          workoutName: response.data.workoutName,
          squat: response.data.squat,
          bench: response.data.bench,
          deadlift: response.data.deadlift,
          ohp: response.data.ohp,
          completion: response.data.completion,
        });
      });
  }

  saveWorkout() {
    console.log('save');
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
    }).then(() => {
      this.setState({
        exists: false,
        added: true,
        workoutName: '',
        squat: '',
        bench: '',
        deadlift: '',
        ohp: '',
        completion: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      });
    })
      .catch((err) => {
        console.log(err);
        this.setState({ exists: true });
      });
  }

  render() {
    const {
      workoutName,
      completion,
      squat,
      bench,
      deadlift,
      ohp,
      exists,
      added,
      search,
      preloaded,
    } = this.state;

    let displayExists;

    if (exists) {
      displayExists = (
        <div className={styles.exists}>
          This workout name already exists!
        </div>
        );
    } else  {
      displayExists = (<div />);
    }

    let displayAdded;
    if (added) {
      displayAdded = (
        <div className={styles.added}>
          Saved workout!
        </div>
        );
    } else  {
      displayAdded = (<div />);
    }

    let button;
    if (preloaded) {
      button = (
        <button 
          type="button"
          onClick={() => this.updateWorkout()}
        >
        Update Workout
        </button>
      );
    } else {
      button = (
        <button 
          type="button"
          onClick={() => this.saveWorkout()}
        >
        Save Workout
        </button>
      );
    }

    return (
      <div className={styles.container}>
        <div>
          <div>
            <h1>6GOD</h1>
          </div>
          <Audio/>

          <Load
            handleSearchChange={this.handleSearchChange}
            fetchWorkout={this.fetchWorkout}
            search={search}
          />

          <Inputs
            {...this.state}
            handleSquatChange={this.handleSquatChange}
            handleBenchChange={this.handleBenchChange}
            handleDeadliftChange={this.handleDeadliftChange}
            handleOHPChange={this.handleOHPChange}
            handleWorkoutNameChange={this.handleWorkoutNameChange}
            saveWorkout={this.saveWorkout}
          />
          {displayExists}
          {displayAdded}
          {button}
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

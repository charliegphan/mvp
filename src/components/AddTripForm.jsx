import React from 'react';
// import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css';

class AddTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: '',
      destination: '',
      startDate: '',
      endDate: '',
      friend: '',
      friends: [],
    };
  }

  handleTripNameChange(tripName) {
    this.setState({ tripName });
  }

  handleDestinationChange(destination) {
    this.setState({ destination });
  }

  handleStartDateChange(startDate) {
    this.setState({ startDate });
  }

  handleEndDateChange(endDate) {
    this.setState({ endDate });
  }

  handleFriendChange(friend) {
    this.setState({ friend });
  }

  handleAddFriend() {
    const { friends, friend } = this.state;
    this.setState({ friend: '', friends: friends.concat(friend) });
  }

  render() {
    const {
      tripName,
      destination,
      startDate,
      endDate,
      friends,
      friend,
    } = this.state;

    return (
      <div>
        <form>
          <div>
            <label>
              Name of trip:
              <input type="text" value={tripName} onChange={e => this.handleTripNameChange(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
              Destination:
              <input type="text" value={destination} onChange={e => this.handleDestinationChange(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
              Start Date:
              <input type="text" value={startDate} onChange={e => this.handleStartDateChange(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
              End Date:
              <input type="text" value={endDate} onChange={e => this.handleEndDateChange(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
              Friends:
              <input type="text" value={friend} onChange={e => this.handleFriendChange(e.target.value)} />
            </label>
            <button type="button" onClick={() => this.handleAddFriend()}>Add friend to trip</button>
          </div>

          <ul>
            {friends.map(friendItem => <div>{friendItem}</div>)}
          </ul>

        </form>
      </div>
    );
  }
}

export default AddTripForm;

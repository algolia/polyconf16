import React from 'react';
import EventRow from './EventRow';

class EventTable extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Tags</td>
            <td>Start</td>
            <td>End</td>
            <td>Participants</td>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map((e, i) => (
            <EventRow key={i} {...e} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default EventTable;

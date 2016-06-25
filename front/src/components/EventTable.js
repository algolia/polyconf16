import React, {PropTypes} from 'react';
import EventRow from './EventRow';

class EventTable extends React.Component {
  static get propTypes() {
    return {
      events: PropTypes.array.shape({
        name: PropTypes.string,
        tags: PropTypes.array,
        start: PropTypes.string,
        end: PropTypes.string,
        participants: PropTypes.array
      }).isRequired
    };
  }

  render() {
    const {events} = this.props;

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
          {events.map((e, i) => (
            <EventRow key={i} {...e} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default EventTable;

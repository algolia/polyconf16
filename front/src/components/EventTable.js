import React, {PropTypes} from 'react';
import EventRow from './EventRow';

class EventTable extends React.Component {
  static get propTypes() {
    return {
      events: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          tags: PropTypes.array,
          start: PropTypes.string,
          end: PropTypes.string,
          participants: PropTypes.arrayOf(PropTypes.string)
        })
      ).isRequired
    };
  }

  render() {
    const {events} = this.props;

    return (
      <table styles={{marginTop: 30}}className="table is-bordered">
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
            <div>

              <EventRow key={i} {...e} />
            </div>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EventTable;

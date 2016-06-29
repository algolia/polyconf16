import React, {PropTypes} from 'react';
import Event from './Event';

class VenueEvents extends React.Component {
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
      <section className="events">
        {events.map((e, i) => (
          <div
            key={i}
            className="event-item"
          >
            {
              (i === 0)
                ? <strong className="day-label">Monday, June 27</strong>
                : null
            }
            <Event {...e} />
          </div>
        ))}
      </section>
    );
  }
}

export default VenueEvents;

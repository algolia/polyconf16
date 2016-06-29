import React, {PropTypes} from 'react';
import RegisterContainer from './RegisterContainer';

class Event extends React.Component {
  static propTypes() {
    return {
      name: PropTypes.string.isRequired,
      people: PropTypes.arrayOf(PropTypes.string).isRequired,
      start: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      eventId: PropTypes.int,
      key: PropTypes.int
    };
  }
  render() {
    const {
      name,
      tags,
      start,
      people,
      eventId
    } = this.props;

    return (
      <div className="box" key={eventId}>
        <article>
          <div>
            <div className="columns">
              <div className="column is-narrow">
                <h2>{start}</h2>
              </div>
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <div className="emoji-tags">
                      {
                        tags.map((x, i) => <span key={i}>{x}</span>)
                      }
                    </div>
                    <h2 className="title">{name}</h2>
                    <a href="">88 Rue De Rivoli, Paris</a>
                  </div>
                  <div className="column is-narrow">
                    <RegisterContainer eventId={eventId} />
                  </div>
                </div>
                <div className="people-going">
                  <div className="participants">
                    {
                      people.length
                        ? `${people.length} participants`
                        : 'No participants 😓'
                    }
                  </div>
                  <div className="user-avatar">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User Avatar" />
                  </div>
                  <div className="user-avatar" alt="User Avatar">
                    <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="User Avatar" />
                  </div>
                  <div className="user-avatar">
                    <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="User Avatar" />
                  </div>
                  <div className="user-avatar">
                    <img src="https://randomuser.me/api/portraits/men/70.jpg" alt="User Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Event;

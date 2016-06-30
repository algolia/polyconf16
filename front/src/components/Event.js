import React, {PropTypes} from 'react';
import RegisterContainer from './RegisterContainer';

class Event extends React.Component {
  static propTypes() {
    return {
      name: PropTypes.string.isRequired,
      people: PropTypes.arrayOf(PropTypes.string).isRequired,
      start: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.string,
    };
  }

  render() {
    const {
      name,
      tags,
      start,
      people,
      address
    } = this.props;

    return (
      <div className="box" key={name}>
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
                    <a href="">{address}</a>
                  </div>
                  <div className="column is-narrow">
                    <RegisterContainer eventName={name} />
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

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
      address,
      eventId
    } = this.props;

    //TODO
    return;
  }
}

export default Event;

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
     <h1>TODO: Implement Stuff</h1>
    );
  }
}

export default Event;

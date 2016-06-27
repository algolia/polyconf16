import {connect} from 'react-redux';
import {getEvents} from '../reducers';
import VenueEvents from './VenueEvents';

function mapStateToProps(state) {
  const events = getEvents(state);

  return {
    events
  };
}

export default connect(mapStateToProps)(VenueEvents);

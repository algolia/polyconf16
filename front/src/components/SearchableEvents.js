import {connect} from 'react-redux';
import VenueEvents from './VenueEvents';

function searchEvents({events, query}) {
  return events.filter(e => e.name.match(new RegExp(query, 'i')));
}

function mapStateToProps(state) {
  const events = searchEvents(state);

  return {
    events
  };
}

export default connect(mapStateToProps)(VenueEvents);

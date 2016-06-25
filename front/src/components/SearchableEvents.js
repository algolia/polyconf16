import { connect } from 'react-redux';
import EventTable from './EventTable';

function searchEvents({ events, query }) {
  return events.filter(e => e.name.includes(query));
}

function mapStateToProps(state) {
  const events = searchEvents(state);

  return {
    events
  };
}

export default connect(mapStateToProps)(EventTable);

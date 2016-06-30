import {connect} from 'react-redux';

import RegisterButton from './RegisterButton';
import {addPerson, removePerson} from '../actions';

const NAME = 'algolia';

function isRegistered(events, eventId, name) {
  const event = events.find(e => e.eventId === eventId);
  return event.people.indexOf(name) !== -1;
}

function mapStateToProps(state, ownProps) {
  return {
    registered: isRegistered(state.events, ownProps.eventId, NAME),
    eventId: ownProps.eventId,
  };
}

function mapDispatchToProps(dispatch, {eventId}) {
  return {
    handleUnregisterClick() {
      dispatch(removePerson(eventId, NAME));
    },

    handleRegisterClick() {
      dispatch(addPerson(eventId, NAME));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterButton);

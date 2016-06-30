import {connect} from 'react-redux';

import RegisterButton from './RegisterButton';
import {addPerson, removePerson} from '../actions';

const NAME = 'gianluca';

function isRegistered(events, eventName, name) {
  console.log(events, eventName, name)
  const event = events.find(e => e.name === eventName);
  return event.people.indexOf(name) !== -1;
}

function mapStateToProps(state, ownProps) {
  return {
    registered: isRegistered(state.events, ownProps.eventName, NAME),
    eventName: ownProps.eventName
  };
}

function mapDispatchToProps(dispatch, {eventName}) {
  return {
    handleUnregisterClick() {
      dispatch(removePerson(eventName, NAME));
    },

    handleRegisterClick() {
      dispatch(addPerson(eventName, NAME));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterButton);

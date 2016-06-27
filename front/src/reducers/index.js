import {combineReducers} from 'redux';
import * as T from '../actions/types';

function addRandomId(event) {
  return {
    ...event,
    eventId: Math.floor(Math.random() * 1e6) + 1
  };
}

function people(peopleList = [], action) {
  switch (action.type) {
    case T.ADD_PERSON:
      if (peopleList.indexOf(action.person) === -1) {
        return [...peopleList, action.person];
      }
      return peopleList;
    case T.REMOVE_PERSON:
      return peopleList.filter(p => p !== action.person);
    default:
      return peopleList;
  }
}

function events(eventsList = [], action) {
  switch (action.type) {
    case T.ADD_EVENT:
      return [...eventsList, addRandomId(action.event)];
    case T.DELETE_EVENT:
      return eventsList.filter(e => e.id !== action.id);
    case T.SET_EVENTS:
      return action.events.map(addRandomId);
    case T.ADD_PERSON:
    case T.REMOVE_PERSON:
      return eventsList.map(e => {
        if (e.eventId !== action.eventId) {
          return e;
        }
        return {...e, people: people(e.people, action)};
      });
    default:
      return eventsList;
  }
}

function query(q = '', action) {
  switch (action.type) {
    case T.SEARCH_EVENTS:
      return action.query;
    default:
      return q;
  }
}

function addEventModal(state = {visible: false}, {type, visible}) {
  switch (type) {
    case T.TOGGLE_MODAL:
      return {
        ...state,
        visible
      };
    default:
      return state;
  }
}

export default combineReducers({
  events,
  query,
  addEventModal
});


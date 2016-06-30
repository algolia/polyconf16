import {combineReducers} from 'redux';
import * as T from '../actions/types';

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
      return [action.event, ...eventsList];
    case T.DELETE_EVENT:
      return eventsList.filter(e => e.id !== action.id);
    case T.SET_EVENTS:
      return action.events;
    case T.ADD_PERSON:
    case T.REMOVE_PERSON:
      return eventsList.map(e => {
        if (e.name !== action.event) {
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

function addVenueForm(state = {}, {type, field, value}) {
  const initialState = {};

  switch (type) {
    case T.ADD_VENUE_CHANGE:
      return {
        ...state,
        [field]: value
      };
    case T.ADD_VENUE_SUBMIT:
      return initialState;
    default:
      return state;
  }
}

function poznanVenues(state = {results: []}, {type, results}) {
  switch (type) {
    case T.SEARCH_POZNAN_VENUES:
      return {
        ...state,
        results
      };
    default:
      return state;
  }
}

// Selectors
export function getEvents(state) {
  return state.events.filter(e => e.name.match(new RegExp(state.query, 'i')));
}

export default combineReducers({
  events,
  query,
  addEventModal,
  addVenueForm,
  poznanVenues
});


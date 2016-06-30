import * as T from './types';
import AlgoliaClient from '../utils/AlgoliaClient';

//
// Events Actions
//
export function addEvent(event) {
  return {
    type: T.ADD_EVENT,
    event
  };
}

export function deleteEvent(id) {
  return {
    type: T.DELETE_EVENT,
    id
  };
}

export function setEvents() {
  //TODO
}

export function searchEvents(query) {
  return {
    type: T.SEARCH_EVENTS,
    query
  };
}

//
// Modal Actions
//
export function toggleModal(visible) {
  return {
    type: T.TOGGLE_MODAL,
    visible
  };
}

//
// Person Actions
//
export function addPerson(eventId, person) {
  //TODO
}

export function removePerson(eventId, person) {
  return {
    type: T.REMOVE_PERSON,
    eventId,
    person
  };
}

//
// Add Venue Form Actions
//
export function changeAddVenueForm(field, value) {
  return {
    type: T.ADD_VENUE_CHANGE,
    field,
    value
  };
}

export function submitAddVenueForm() {
  //TODO
}

export function searchPoznanVenues(q) {
  //TODO
}

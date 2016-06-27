import * as T from './types';

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

export function setEvents(events) {
  return {
    type: T.SET_EVENTS,
    events
  };
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
  return {
    type: T.ADD_PERSON,
    eventId,
    person
  };
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
  return {
    type: T.ADD_VENUE_SUBMIT
  };
}

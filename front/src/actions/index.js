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
  return function(dispatch) {
    fetch(new Request('http://localhost:8081/1/events'))
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        dispatch({
          type: T.SET_EVENTS,
          events: json
        });
      });
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
  return (dispatch, getState) => {
    dispatch({
      type: T.ADD_PERSON,
      eventId,
      person
    });

    const event = getState().events.find(e => e.eventId === eventId);
    const url = `http://localhost:8081/1/events/${event.name}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    });
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
  return function(dispatch, getState) {
    const {addVenueForm} = getState();

    const errors = Object.keys(addVenueForm)
      .map(x => addVenueForm[x])
      .filter(x => x && x.length > 1);

    // Validate form for empty values
    if (errors.length > 1) {
      const event = {
        name: addVenueForm.name,
        tags: addVenueForm.tags.map(x => x.value),
        start: addVenueForm.start,
        people: []
      };

      dispatch({
        type: T.ADD_EVENT,
        event
      });

      dispatch({
        type: T.ADD_VENUE_SUBMIT
      });

      dispatch({
        type: T.TOGGLE_MODAL,
        visible: false
      });
    }
  };
}

export function searchPoznanVenues(q) {
  return function(dispatch) {
    const client = AlgoliaClient.index('poznan_venues');

    client.search(q, (err, {hits}) => {
      return dispatch({
        type: T.SEARCH_POZNAN_VENUES,
        results: hits
      });
    });
  };
}

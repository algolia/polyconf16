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
export function addPerson(event, person) {
  return {
    type: T.ADD_PERSON,
    event,
    person
  };
}

export function removePerson(event, person) {
  return {
    type: T.REMOVE_PERSON,
    event,
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
        end: addVenueForm.end,
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

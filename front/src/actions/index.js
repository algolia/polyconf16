import * as T from './types'

export function addEvent(event) {
    return {
        type: T.ADD_EVENT,
        event
    }
}

export function deleteEvent(id) {
    return {
        type: T.DELETE_EVENT,
        id
    }
}

export function setEvents(events) {
    return {
        type: T.SET_EVENTS,
        events
    }
}

export function searchEvents(query) {
    return {
        type: T.SEARCH_EVENTS,
        query
    }
}

export function addPerson(enventID, person) {
    return {
        type: T.ADD_PERSON,
        eventID,
        person
    }
}

export function removePerson(eventID, person) {
    return {
        type: T.REMOVE_PERSON,
        eventID,
        person
    }
}

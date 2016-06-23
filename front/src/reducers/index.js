import { combineReducers } from 'redux'
import * as T from '../actions/types'

function people(people = [], action) {
    switch (action.type) {
        case T.ADD_PERSON:
            return [...people, action.person]
        case T.REMOVE_PERSON:
            return people.filter(p => p !== action.person)
        default:
            return people
    }
}

function events(events = [], action) {
    switch (action.type) {
        case T.ADD_EVENT:
            return [...events, action.event]
        case T.DELETE_EVENT:
            return events.filter(e => e.id !== action.id)
        case T.SET_EVENTS:
            return action.events
        case T.ADD_PERSON:
        case T.REMOVE_PERSON:
            return events.map(e => {
                if (e.id !== action.eventID)
                    return e
                return { ...e, people: people(e.people, action) }
            })
        default:
            return events
    }
}

function query(query = '', action) {
    switch (action.type) {
        case T.SEARCH_EVENTS:
            return action.query
        default:
            return query
    }
}

export default combineReducers({
    events,
    query
})

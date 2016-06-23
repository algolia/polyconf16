import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { setEvents } from './actions'

const events = [
    {
        name: 'Tokyo Beaubourg',
        tags: ['japanese', 'sushi'],
        start: '12:00',
        end: '12:30',
        people: ['a', 'b', 'c']
    },
    {
        name: 'MacDonald',
        tags: ['burger', 'USA'],
        start: '14:00',
        end: '16:30',
        people: ['d', 'e', 'f']
    }
]

let store = createStore(reducer)
store.dispatch(setEvents(events))

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))

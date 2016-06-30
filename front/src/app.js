import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './store/configureStore';
import {setEvents} from './actions';
import {Provider} from 'react-redux';

const events = [
  {
    name: 'Tokyo Beaubourg',
    tags: ['🍣'],
    start: '14:00',
    people: ['a', 'b', 'c']
  },
  {
    name: 'MacDonald',
    tags: ['🍔'],
    start: '14:00',
    people: ['d', 'e', 'f']
  },
  {
    name: 'Luigi\'s Traditional Fish & Chips',
    tags: ['🐟', '🍟'],
    start: '13:30',
    people: ['a']
  }
];

const store = configureStore();
store.dispatch(setEvents(events));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './store/configureStore';
import {setEvents} from './actions';
import {Provider} from 'react-redux';

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
];

const store = configureStore();
store.dispatch(setEvents(events));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

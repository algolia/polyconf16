import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './store/configureStore';
import {setEvents} from './actions';
import {Provider} from 'react-redux';

const store = configureStore();
store.dispatch(setEvents());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

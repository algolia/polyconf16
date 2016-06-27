/* eslint global-require:0 */

import thunk from 'redux-thunk';
import reducers from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/* eslint global-require:0 */

import {createStore, compose} from 'redux';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, compose(
    // applyMiddleware(invariant(), thunk),
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

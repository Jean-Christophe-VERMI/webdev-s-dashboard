import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import registrationMiddleware from '../middleware/registrationMiddleware';
import verifEmailMiddleware from '../middleware/verifEmailMiddleware';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    registrationMiddleware,
    verifEmailMiddleware,
    // secondMiddleware,
  ),
);


const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

export default store;
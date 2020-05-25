import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import registrationMiddleware from '../middleware/registrationMiddleware';
import verifEmailMiddleware from '../middleware/verifEmailMiddleware';
import authMiddleware from '../middleware/authMiddleware';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    registrationMiddleware,
    verifEmailMiddleware,
    authMiddleware,
    // secondMiddleware,
  ),
);


export const store = createStore(
  rootReducer,
  
  // preloadedState,
  enhancers,
);

export const persistor = persistStore(store);


export default { store, persistor } ;
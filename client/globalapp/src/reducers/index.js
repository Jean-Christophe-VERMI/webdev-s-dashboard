import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dashbord from './dashbord';
import registration from './registration';
import verifEmail from './verifEmail';
import auth from './auth';
import main from './main';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main'],
}

const rootReducer = combineReducers({
  dashbord,
  registration,
  verifEmail,
  auth,
  main,
});

export default persistReducer(persistConfig, rootReducer);
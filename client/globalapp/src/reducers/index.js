import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dashboard from './dashboard';
import registration from './registration';
import verifEmail from './verifEmail';
import auth from './auth';
import main from './main';
import project from './project';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main'],
}

const rootReducer = combineReducers({
  dashboard,
  registration,
  verifEmail,
  auth,
  main,
  project,
});

export default persistReducer(persistConfig, rootReducer);
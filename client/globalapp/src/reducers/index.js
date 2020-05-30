import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dashboard from './dashboard';
import registration from './registration';
import verifEmail from './verifEmail';
import auth from './auth';
import main from './main';
import project from './project';
import day from './day';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main', 'dashboard'],
}

const rootReducer = combineReducers({
  dashboard,
  registration,
  verifEmail,
  auth,
  main,
  project,
  day,
});

export default persistReducer(persistConfig, rootReducer);
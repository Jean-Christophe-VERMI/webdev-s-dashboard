import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dashboard from './dashboard';
import registration from './registration';
import auth from './auth';
import main from './main';
import project from './project';
import day from './day';
import editor from './editor';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main', 'dashboard', 'project', 'editor', 'day'],
}

const rootReducer = combineReducers({
  dashboard,
  registration,
  auth,
  main,
  project,
  day,
  editor,
});

export default persistReducer(persistConfig, rootReducer);
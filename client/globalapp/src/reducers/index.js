import { combineReducers } from 'redux';
import dashbord from './dashbord';
import registration from './registration';
import verifEmail from './verifEmail';
import auth from './auth';

export default combineReducers({
  dashbord,
  registration,
  verifEmail,
  auth,
});
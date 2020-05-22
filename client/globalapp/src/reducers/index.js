import { combineReducers } from 'redux';
import dashbord from './dashbord';
import registration from './registration';
import verifEmail from './verifEmail';

export default combineReducers({
  dashbord,
  registration,
  verifEmail,
});
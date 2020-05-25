
import {
  LOGOUT,
  VALIDATION_AUTH,
  ADD_USER_INFOS,
} from '../actions/user';

export const initialState = {
  userId: '',
  username: '',
  email: '',
  isLogged: false,
  notLogged: true,
};

const main = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALIDATION_AUTH:
      return {
        ...state,
        isLogged: true,
        notLogged: false,
      };
    case ADD_USER_INFOS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        userId: action.payload.id,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        notLogged: true,
        username: '',
        userId: '',
        email: '',
      };
    default:
    return state;
  }
};

export default main;
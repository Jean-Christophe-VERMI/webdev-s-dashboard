
import {
  SEND_AUTH_INFOS,
  MODIFY_FIELD,
  HAS_ERROR,
  ERROR_MESSAGE,
  VALIDATION_AUTH,
  ADD_USER_INFOS,
  LOGOUT,
  CLEAR_ERROR,
  CLEAR_VALIDATION,
} from '../actions/user';

export const initialState = {
  userId: '',
  username: '',
  email: '',
  password: '',
  hasError: false,
  errorMessageLogin: '',
  validationAuth: false,
  validationMessageLogin: 'Connexion réussie, vous allez être redirigé vers votre Dashbord...',
  isLogged: false,
  notLogged: true,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_AUTH_INFOS:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessageLogin: action.value,
      };
    case VALIDATION_AUTH:
      return {
        ...state,
        validationAuth: true,
        isLogged: true,
        notLogged: false,
        password: '',
      };
    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
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
        validationAuth: false,
        isLogged: false,
        notLogged: true,
        username: '',
        userId: '',
        email: '',
        validationMessageLogin: initialState.validationMessageLogin,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessageLogin: '',
      };
    case CLEAR_VALIDATION:
      return {
        ...state,
        validationMessageLogin: '',
      };
    default:
    return state;
  }
};

export default auth;
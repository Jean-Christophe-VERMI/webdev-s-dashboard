
import {
  SEND_USER,
  MODIFY_FIELD,
  HAS_ERROR_REGISTER,
  ERROR_MESSAGE,
  VALIDATION_SIGNUP,
  VALIDATION_AUTH,
  CLEAR_ERROR,
  CLEAR_VALIDATION,
} from '../actions/user';

export const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  github: '',
  twitter: '',
  linkedIn: '',
  users: [],
  items: [],
  hasErrorRegister: false,
  errorMessageRegister: '',
  validationSignup: false,
  validationMessageRegister: 'Merci pour votre inscription ! Veuillez à présent vérifier votre adresse e-mail en suivant les inscructions indiqués dans l\'email que nous venons de vous envoyer.',
  isVerified: false,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_USER:
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
        errorMessageRegister: action.value,
      };
    case VALIDATION_SIGNUP:
      return {
        ...state,
        validationSignup: true,
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      };
    case VALIDATION_AUTH:
      return {
        ...state,
        email: '',
        password: '',
      };
    case HAS_ERROR_REGISTER:
      return {
        ...state,
        hasErrorRegister: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessageRegister: '',
        hasErrorRegister: false,
      };
    case CLEAR_VALIDATION:
      return {
        ...state,
        validationMessageRegister: '',
      };
    default:
    return state;
  }
};

export default register;
import {
  SEND_USER,
  MODIFY_FIELD,
  HAS_ERROR,
  ERROR_MESSAGE,
  VALIDATION_SIGNUP,
  VERIFY_CALLBACK,
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
  hasError: false,
  errorMessage: '',
  validationSignup: false,
  validationMessage: 'Merci pour votre inscription ! Veuillez à présent vérifier votre adresse e-mail. Pour cela, suivez les inscructions indiqués dans l\'email que nous venons de vous envoyer.',
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
        errorMessage: action.value,
      };
    case VALIDATION_SIGNUP:
      return {
        ...state,
        validationSignup: true,
      };
    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case VERIFY_CALLBACK: {
      if (action.response) {
        return {
          ...state,
          isVerified: true,
        };
      }
    };
    default:
    return state;
  }
};

export default register;
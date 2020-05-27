
import {
  SEND_TOKEN,
  MODIFY_FIELD,
  HAS_ERROR_VERIF_EMAIL,
  ERROR_MESSAGE,
  VALIDATION_EMAIL,
  CLEAR_ERROR,
  CLEAR_VALIDATION,
} from '../actions/user';

export const initialState = {
  secretToken: '',
  hasErrorVerifEmail: false,
  errorMessageVerifEmail: '',
  validationEmail: false,
  validationMessageVerifEmail: 'Email validé ! Vous pouvez désormais vous connecter avec vos identifiants.',
};

const verifEmail = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_TOKEN:
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
        errorMessageVerifEmail: action.value,
      };
    case VALIDATION_EMAIL:
      return {
        ...state,
        validationEmail: true,
        secretToken: '',
      };
    case HAS_ERROR_VERIF_EMAIL:
      return {
        ...state,
        hasErrorVerifEmail: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessageVerifEmail: '',
      };
    case CLEAR_VALIDATION:
      return {
        ...state,
        validationMessageVerifEmail: '',
      };
    default:
    return state;
  }
};

export default verifEmail;
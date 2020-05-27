
import {
  SEND_PROJECT,
  MODIFY_FIELD_PROJECT,
  EDIT_PROJECT,
  HAS_ERROR_POST_PROJECT,
  ERROR_MESSAGE_POST_PROJECT,
  VALIDATION_POST_PROJECT,
  CLEAR_ERROR_PROJECT,
  CLEAR_VALIDATION_PROJECT,
} from '../actions/project';

export const initialState = {
  title: '',
  description: '',
  catégorie_type: '',
  catégorie_état: '',
  favori: false,
  image: '',
  hasErrorPostProject: false,
  errorMessagePostProject: '',
  validalidationPostProject: false,
  validationMessagePostProject: 'Nouveau projet créé avec succès',
};

const project = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_PROJECT:
      return {
        ...state,
        [action.key]: action.value,
      };
    case EDIT_PROJECT:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD_PROJECT:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE_POST_PROJECT:
      return {
        ...state,
        errorMessagePostProject: action.value,
      };
    case VALIDATION_POST_PROJECT:
      return {
        ...state,
        title: '',
        description: '',
        catégorie_type: '',
      };
    case HAS_ERROR_POST_PROJECT:
      return {
        ...state,
        hasErrorPostProject: true,
      };
    case CLEAR_ERROR_PROJECT:
      return {
        ...state,
        errorMessagePostProject: '',
      };
    case CLEAR_VALIDATION_PROJECT:
      return {
        ...state,
        validationMessagePostProject: '',
      };
    default:
    return state;
  }
};

export default project;

import {
  SEND_PROJECT,
  MODIFY_FIELD_PROJECT,
  EDIT_PROJECT,
  HAS_ERROR_POST_PROJECT,
  ERROR_MESSAGE_POST_PROJECT,
  VALIDATION_POST_PROJECT,
  VALIDATION_EDIT_PROJECT,
  CLEAR_ERROR_PROJECT,
  CLEAR_VALIDATION_PROJECT,
  CLEAR_VALIDATION_EDIT_PROJECT,
  DISPATCH_CURRENT_PROJECT_ID,
  DISPATCH_CURRENT_PROJECT_TITLE,
  DISPATCH_NEW_TITLE_URL,
} from '../actions/project';

export const initialState = {
  title: '',
  description: '',
  catégorie_type: '',
  catégorie_état: '',
  favori: false,
  image: '',
  currentProjectId: '',
  currentProjectTitle: '',
  newTitleURL: '',
  hasErrorPostProject: false,
  errorMessagePostProject: '',
  validationPostProject: false,
  validationEditProject: false,
  validationMessagePostProject: 'Nouveau projet créé avec succès',
  validationMessageEditProject: 'Modifications enregistrés',
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
        validationPostProject: true,
      };
    case VALIDATION_EDIT_PROJECT:
      return {
        ...state,
        title: '',
        description: '',
        catégorie_type: '',
        catégorie_état: '',
        validationEditProject: true,
      };
    case DISPATCH_CURRENT_PROJECT_ID:
      return {
        ...state,
        currentProjectId: action.id,
      };
    case DISPATCH_CURRENT_PROJECT_TITLE:
      return {
        ...state,
        currentProjectTitle: action.title,
      };
    case DISPATCH_NEW_TITLE_URL:
      return {
        ...state,
        newTitleURL: action.title,
        currentProjectTitle: action.title,
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
        validationPostProject: false,
      };
    case CLEAR_VALIDATION_EDIT_PROJECT:
      return {
        ...state,
        validationMessageEditProject: '',
        validationEditProject: false,
      };
    default:
    return state;
  }
};

export default project;
import {
  SEND_TECHNO,
  MODIFY_FIELD_TECHNO,
  EDIT_TECHNO,
  HAS_ERROR_POST_TECHNO,
  ERROR_MESSAGE_POST_TECHNO,
  VALIDATION_POST_TECHNO,
  CLEAR_ERROR_TECHNO,
  CLEAR_VALIDATION_TECHNO,
  DISPATCH_CURRENT_TECHNONAME,
} from '../actions/techno';

export const initialState = {
  name: '',
  project_id: '',
  currentTechnoName: '',
  hasErrorPostTechno: false,
  errorMessagePostTechno: '',
  validationPostTechno: false,
  validationMessagePostTechno: 'Nouveau tag ajouté',
};

const techno = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_TECHNO:
      return {
        ...state,
        [action.key]: action.value,
      };
    case EDIT_TECHNO:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD_TECHNO:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE_POST_TECHNO:
      return {
        ...state,
        errorMessagePostTechno: action.value,
      };
    case VALIDATION_POST_TECHNO:
      return {
        ...state,
        validationPostTechno: true,
      };
    case DISPATCH_CURRENT_TECHNONAME:
      return {
        ...state,
        currentTechnoName: action.id,
      };
    case HAS_ERROR_POST_TECHNO:
      return {
        ...state,
        hasErrorPostTechno: true,
      };
    case CLEAR_ERROR_TECHNO:
      return {
        ...state,
        errorMessagePostTechno: '',
      };
    case CLEAR_VALIDATION_TECHNO:
      return {
        ...state,
        validationMessagePostTechno: '',
      };
    default:
    return state;
  }
};

export default techno;
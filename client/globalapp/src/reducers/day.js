import {
  MODIFY_FIELD_DAY,
  EDIT_DAY,
  HAS_ERROR_POST_DAY,
  ERROR_MESSAGE_POST_DAY,
  VALIDATION_POST_DAY,
  CLEAR_ERROR_DAY,
  CLEAR_VALIDATION_DAY,
  DISPATCH_CURRENT_DAY,
  ADD_NEW_DAY,
} from '../actions/day';

export const initialState = {
  date: '',
  project_id: '',
  text: '',
  code: '',
  ref_source: '',
  currentDay: '',
  hasErrorPostDay: false,
  errorMessagePostDay: '',
  validationPostDay: false,
  validationMessagePostDay: 'Ajout en cours ...',
  hasNewDay: false,
};

const day = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_DAY:
      return {
        ...state,
        hasNewDay: true,
      };
    case EDIT_DAY:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD_DAY:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE_POST_DAY:
      return {
        ...state,
        errorMessagePostDay: action.value,
      };
    case VALIDATION_POST_DAY:
      return {
        ...state,
        validationPostDay: true,
      };
    case DISPATCH_CURRENT_DAY:
      return {
        ...state,
        currentDay: action.id,
      };
    case HAS_ERROR_POST_DAY:
      return {
        ...state,
        hasErrorPostDay: true,
      };
    case CLEAR_ERROR_DAY:
      return {
        ...state,
        errorMessagePostDay: '',
      };
    case CLEAR_VALIDATION_DAY:
      return {
        ...state,
        validationMessagePostDay: '',
      };
    default:
    return state;
  }
};

export default day;
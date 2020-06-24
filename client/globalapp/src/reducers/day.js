import {
  MODIFY_FIELD_DAY,
  EDIT_FIELD_DAY,
  EDIT_DAY,
  HAS_ERROR_POST_DAY,
  ERROR_MESSAGE_POST_DAY,
  VALIDATION_POST_DAY,
  VALIDATION_EDIT_DAY,
  CLEAR_ERROR_DAY,
  CLEAR_VALIDATION_DAY,
  CLEAR_VALIDATION_EDIT_DAY,
  DISPATCH_CURRENT_DAY,
  ADD_NEW_DAY,
  SAVE_DATA_TEXT,
  SAVE_DATA_CODE
} from '../actions/day';

import {
  LOGOUT,
} from '../actions/user.js';

export const initialState = {
  project_id: '',
  text: '',
  code: '',
  ref_source: '',
  currentDay: '',
  hasErrorPostDay: false,
  errorMessagePostDay: '',
  validationPostDay: false,
  validationEditDay: false,
  validationMessagePostDay: 'Ajout en cours ...',
  validationMessageEditDay: 'Modifications enregistrés',
  hasNewDay: false,
  textFromData: '',
  codeFromData: '',
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
      case EDIT_FIELD_DAY:
        return {
          ...state,
          [action.key]: action.value,
        };
    case SAVE_DATA_TEXT:
      return {
        ...state,
        textFromData: action.value,
        text: action.value,
      };
    case SAVE_DATA_CODE:
      return {
        ...state,
        codeFromData: action.value,
        code: action.value,
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
        validationMessagePostDay: initialState.validationMessagePostDay,
      };
    case VALIDATION_EDIT_DAY:
        return {
          ...state,
          validationEditDay: true,
          validationMessageEditDay: initialState.validationMessageEditDay,
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
        validationPostDay: false,
      };
    case CLEAR_VALIDATION_EDIT_DAY:
        return {
          ...state,
          validationMessageEditDay: '',
          validationEditDay: false,
        };
    case LOGOUT:
      return {
        ...state,
        project_id: initialState.project_id,
        text: initialState.text,
        code: initialState.code,
        ref_source: initialState.ref_source,
        currentDay: initialState.currentDay,
        hasErrorPostDay: initialState.hasErrorPostDay,
        errorMessagePostDay: initialState.errorMessagePostDay,
        validationPostDay: initialState.validationPostDay,
        validationEditDay: initialState.validationEditDay,
        validationMessagePostDay: initialState.validationMessagePostDay,
        validationMessageEditDay: initialState.validationMessageEditDay,
        hasNewDay: initialState.hasNewDay,
        textFromData: initialState.textFromData,
        codeFromData: initialState.codeFromData,
      };
    default:
    return state;
  }
};

export default day;
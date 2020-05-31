import {
  SEND_TAG,
  MODIFY_FIELD_TAG,
  EDIT_TAG,
  HAS_ERROR_POST_TAG,
  ERROR_MESSAGE_POST_TAG,
  VALIDATION_POST_TAG,
  CLEAR_ERROR_TAG,
  CLEAR_VALIDATION_TAG,
  DISPATCH_CURRENT_TAGNAME,
} from '../actions/tag';

export const initialState = {
  name: '',
  day_id: '',
  currentTagName: '',
  hasErrorPostTag: false,
  errorMessagePostTag: '',
  validationPostTag: false,
  validationMessagePostTag: 'Nouveau tag ajouté',
};

const tag = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_TAG:
      return {
        ...state,
        [action.key]: action.value,
      };
    case EDIT_TAG:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD_TAG:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE_POST_TAG:
      return {
        ...state,
        errorMessagePostTag: action.value,
      };
    case VALIDATION_POST_TAG:
      return {
        ...state,
        validationPostTag: true,
      };
    case DISPATCH_CURRENT_TAGNAME:
      return {
        ...state,
        currentTagName: action.id,
      };
    case HAS_ERROR_POST_TAG:
      return {
        ...state,
        hasErrorPostTag: true,
      };
    case CLEAR_ERROR_TAG:
      return {
        ...state,
        errorMessagePostTag: '',
      };
    case CLEAR_VALIDATION_TAG:
      return {
        ...state,
        validationMessagePostTag: '',
      };
    default:
    return state;
  }
};

export default tag;
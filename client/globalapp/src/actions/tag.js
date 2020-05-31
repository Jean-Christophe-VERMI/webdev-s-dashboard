export const SEND_TAG = 'SEND_TAG';
export const EDIT_TAG = 'EDIT_TAG';
export const MODIFY_FIELD_TAG = 'MODIFY_FIELD_TAG';
export const HAS_ERROR_POST_TAG = 'HAS_ERROR_POST_TAG';
export const ERROR_MESSAGE_POST_TAG = 'ERROR_MESSAGE_POST_TAG';
export const VALIDATION_POST_TAG = 'VALIDATION_POST_TAG';
export const CLEAR_ERROR_TAG = 'CLEAR_ERROR_TAG';
export const CLEAR_VALIDATION_TAG = 'CLEAR_VALIDATION_TAG';
export const DISPATCH_CURRENT_TAGNAME = 'DISPATCH_CURRENT_TAGNAME';


export const sendTag = (value, key) => ({
  type: SEND_TAG,
  value,
  key,
});

export const editTag = (value, key) => ({
  type: EDIT_TAG,
  value,
  key,
});

export const modifyFieldTag = (value, key) => ({
  type: MODIFY_FIELD_TAG,
  value,
  key,
});

export const hasErrorPostTag = () => ({
  type: HAS_ERROR_POST_TAG,
});

export const errorMsgPostTag = (value) => ({
  type: ERROR_MESSAGE_POST_TAG,
  value,
});

export const clearErrorTag = (value) => ({
  type: CLEAR_ERROR_TAG,
  value,
});

export const clearValidationTag = (day) => ({
  type: CLEAR_VALIDATION_TAG,
  day,
});

export const validationPostTag = () => ({
  type: VALIDATION_POST_TAG,
});

export const dispatchCurrentTagName = (name) => ({
  type: DISPATCH_CURRENT_TAGNAME,
  name,
});
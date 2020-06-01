export const SEND_DAY = 'SEND_DAY';
export const EDIT_DAY = 'EDIT_DAY';
export const MODIFY_FIELD_DAY = 'MODIFY_FIELD_DAY';
export const HAS_ERROR_POST_DAY = 'HAS_ERROR_POST_DAY';
export const ERROR_MESSAGE_POST_DAY = 'ERROR_MESSAGE_POST_DAY';
export const VALIDATION_POST_DAY = 'VALIDATION_POST_DAY';
export const CLEAR_ERROR_DAY = 'CLEAR_ERROR_DAY';
export const CLEAR_VALIDATION_DAY = 'CLEAR_VALIDATION_DAY';
export const DISPATCH_CURRENT_DAY = 'DISPATCH_CURRENT_DAY';
export const EDITOR_DAY = 'EDITOR_DAY';


export const sendDay = (value, key) => ({
  type: SEND_DAY,
  value,
  key,
});

export const editDay = (value, key) => ({
  type: EDIT_DAY,
  value,
  key,
});

export const modifyFieldDay = (value, key) => ({
  type: MODIFY_FIELD_DAY,
  value,
  key,
});

export const hasErrorPostDay = () => ({
  type: HAS_ERROR_POST_DAY,
});

export const errorMsgPostDay = (value) => ({
  type: ERROR_MESSAGE_POST_DAY,
  value,
});

export const clearErrorDay = (value) => ({
  type: CLEAR_ERROR_DAY,
  value,
});

export const clearValidationDay = (day) => ({
  type: CLEAR_VALIDATION_DAY,
  day,
});

export const validationPostDay = () => ({
  type: VALIDATION_POST_DAY,
});

export const editorDay = () => ({
  type: EDITOR_DAY,
});

export const dispatchCurrentDay = (id) => ({
  type: DISPATCH_CURRENT_DAY,
  id,
});
export const ADD_NEW_DAY = 'ADD_NEW_DAY';
export const EDIT_DAY = 'EDIT_DAY';
export const MODIFY_FIELD_DAY = 'MODIFY_FIELD_DAY';
export const EDIT_FIELD_DAY = 'EDIT_FIELD_DAY';
export const HAS_ERROR_POST_DAY = 'HAS_ERROR_POST_DAY';
export const ERROR_MESSAGE_POST_DAY = 'ERROR_MESSAGE_POST_DAY';
export const VALIDATION_POST_DAY = 'VALIDATION_POST_DAY';
export const VALIDATION_EDIT_DAY = 'VALIDATION_EDIT_DAY';
export const CLEAR_ERROR_DAY = 'CLEAR_ERROR_DAY';
export const CLEAR_VALIDATION_DAY = 'CLEAR_VALIDATION_DAY';
export const CLEAR_VALIDATION_EDIT_DAY = 'CLEAR_VALIDATION_EDIT_DAY';
export const DISPATCH_CURRENT_DAY = 'DISPATCH_CURRENT_DAY';
export const EDITOR_DAY = 'EDITOR_DAY';
export const SAVE_DATA_TEXT = 'SAVE_DATA_TEXT';
export const SAVE_DATA_CODE = 'SAVE_DATA_CODE';

export const addNewDay = () => ({
  type: ADD_NEW_DAY,
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

export const editFieldDay = (value, key) => ({
  type: EDIT_FIELD_DAY,
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

export const clearValidationEditDay = () => ({
  type: CLEAR_VALIDATION_EDIT_DAY,
});

export const validationPostDay = () => ({
  type: VALIDATION_POST_DAY,
});

export const validationEditDay = () => ({
  type: VALIDATION_EDIT_DAY,
});

export const editorDay = () => ({
  type: EDITOR_DAY,
});

export const dispatchCurrentDay = (id) => ({
  type: DISPATCH_CURRENT_DAY,
  id,
});

export const saveDataText = (value) => ({
  type: SAVE_DATA_TEXT,
  value,
});

export const saveDataCode = (value) => ({
  type: SAVE_DATA_CODE,
  value,
});

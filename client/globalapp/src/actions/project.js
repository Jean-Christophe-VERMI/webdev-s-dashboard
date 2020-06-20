export const SEND_PROJECT = 'SEND_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const MODIFY_FIELD_PROJECT = 'MODIFY_FIELD_PROJECT';
export const HAS_ERROR_POST_PROJECT = 'HAS_ERROR_POST_PROJECT';
export const ERROR_MESSAGE_POST_PROJECT = 'ERROR_MESSAGE_POST_PROJECT';
export const VALIDATION_POST_PROJECT = 'VALIDATION_POST_PROJECT';
export const VALIDATION_EDIT_PROJECT = 'VALIDATION_EDIT_PROJECT';
export const CLEAR_ERROR_PROJECT = 'CLEAR_ERROR_PROJECT';
export const CLEAR_VALIDATION_PROJECT = 'CLEAR_VALIDATION_PROJECT';
export const CLEAR_VALIDATION_EDIT_PROJECT = 'CLEAR_VALIDATION_EDIT_PROJECT';
export const DISPATCH_CURRENT_PROJECT_ID = 'DISPATCH_CURRENT_PROJECT_ID';
export const DISPATCH_CURRENT_PROJECT_TITLE = 'DISPATCH_CURRENT_PROJECT_TITLE';
export const EDITOR_PROJECT = 'EDITOR_PROJECT';
export const DISPATCH_NEW_TITLE_URL = 'DISPATCH_NEW_TITLE_URL';

export const sendProject = (value, key) => ({
  type: SEND_PROJECT,
  value,
  key,
});

export const editProject = (value, key) => ({
  type: EDIT_PROJECT,
  value,
  key,
});

export const modifyFieldProject = (value, key) => ({
  type: MODIFY_FIELD_PROJECT,
  value,
  key,
});

export const hasErrorPostProject = () => ({
  type: HAS_ERROR_POST_PROJECT,
});

export const errorMsgPostProject = (value) => ({
  type: ERROR_MESSAGE_POST_PROJECT,
  value,
});

export const clearErrorProject = (value) => ({
  type: CLEAR_ERROR_PROJECT,
  value,
});

export const clearValidationProject = () => ({
  type: CLEAR_VALIDATION_PROJECT,
});

export const validationPostProject = () => ({
  type: VALIDATION_POST_PROJECT,
});

export const validationEditProject = () => ({
  type: VALIDATION_EDIT_PROJECT,
});

export const clearValidationEditProject = () => ({
  type: CLEAR_VALIDATION_EDIT_PROJECT,
});

export const editorProject = () => ({
  type: EDITOR_PROJECT,
});

export const dispatchCurrentProjectId = (id) => ({
  type: DISPATCH_CURRENT_PROJECT_ID,
  id,
});

export const dispatchNewTitleURL = (title) => ({
  type: DISPATCH_NEW_TITLE_URL,
  title,
});


export const dispatchCurrentProjectTitle = (title) => ({
  type: DISPATCH_CURRENT_PROJECT_TITLE,
  title,
});
export const SEND_TECHNO = 'SEND_TECHNO';
export const EDIT_TECHNO = 'EDIT_TECHNO';
export const MODIFY_FIELD_TECHNO = 'MODIFY_FIELD_TECHNO';
export const HAS_ERROR_POST_TECHNO = 'HAS_ERROR_POST_TECHNO';
export const ERROR_MESSAGE_POST_TECHNO = 'ERROR_MESSAGE_POST_TECHNO';
export const VALIDATION_POST_TECHNO = 'VALIDATION_POST_TECHNO';
export const CLEAR_ERROR_TECHNO = 'CLEAR_ERROR_TECHNO';
export const CLEAR_VALIDATION_TECHNO = 'CLEAR_VALIDATION_TECHNO';
export const DISPATCH_CURRENT_TECHNONAME = 'DISPATCH_CURRENT_TECHNONAME';


export const sendTechno = (value, key) => ({
  type: SEND_TECHNO,
  value,
  key,
});

export const editTechno = (value, key) => ({
  type: EDIT_TECHNO,
  value,
  key,
});

export const modifyFieldTechno = (value, key) => ({
  type: MODIFY_FIELD_TECHNO,
  value,
  key,
});

export const hasErrorPostTechno = () => ({
  type: HAS_ERROR_POST_TECHNO,
});

export const errorMsgPostTechno = (value) => ({
  type: ERROR_MESSAGE_POST_TECHNO,
  value,
});

export const clearErrorTechno = (value) => ({
  type: CLEAR_ERROR_TECHNO,
  value,
});

export const clearValidationTechno = (day) => ({
  type: CLEAR_VALIDATION_TECHNO,
  day,
});

export const validationPostTechno = () => ({
  type: VALIDATION_POST_TECHNO,
});

export const dispatchCurrentTechnoName = (name) => ({
  type: DISPATCH_CURRENT_TECHNONAME,
  name,
});
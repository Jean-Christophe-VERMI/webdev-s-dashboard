import React from 'react';

import {
  SEND_TOKEN,
  MODIFY_FIELD,
  HAS_ERROR,
  ERROR_MESSAGE,
  VALIDATION_EMAIL,
} from '../actions/user';

export const initialState = {
  secretToken: '',
  hasError: false,
  errorMessage: '',
  validationEmail: false,
  validationMessage: <><p>Email validé ! Vous pouvez désormais vous connecter avec vos identifiants.</p></>,
};

const verifEmail = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_TOKEN:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.value,
      };
    case VALIDATION_EMAIL:
      return {
        ...state,
        validationEmail: true,
      };
    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    default:
    return state;
  }
};

export default verifEmail;
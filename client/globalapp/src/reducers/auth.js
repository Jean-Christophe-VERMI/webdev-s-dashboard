import React from 'react';

import {
  SEND_AUTH_INFOS,
  MODIFY_FIELD,
  HAS_ERROR,
  ERROR_MESSAGE,
  VALIDATION_AUTH,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  hasError: false,
  errorMessage: '',
  validationAuth: false,
  validationMessage: <><p>Connexion réussie, vous allez être redirigé vers votre Dashbord...</p></>,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_AUTH_INFOS:
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
    case VALIDATION_AUTH:
      return {
        ...state,
        validationAuth: true,
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

export default auth;
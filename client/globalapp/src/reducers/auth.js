import React from 'react';

import {
  SEND_AUTH_INFOS,
  MODIFY_FIELD,
  HAS_ERROR,
  ERROR_MESSAGE,
  VALIDATION_AUTH,
  ADD_USER_INFOS,
} from '../actions/user';

export const initialState = {
  userId: '',
  username: '',
  email: '',
  password: '',
  hasError: false,
  errorMessage: '',
  validationAuth: false,
  validationMessage: <><p>Connexion réussie, vous allez être redirigé vers votre Dashbord...</p></>,
  isLogged: false,
  notLogged: true,
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
        isLogged: true,
        notLogged: false,
      };
    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case ADD_USER_INFOS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        userId: action.payload.id,
      };
    default:
    return state;
  }
};

export default auth;
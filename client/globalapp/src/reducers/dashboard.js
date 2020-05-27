import { 
  SAVE_PROJECTS,
  USER_HAS_NO_PROJECT,
  ERROR_MESSAGE_DASHBOARD,
 } from '../actions/dashboard.js';

 import {
   VALIDATION_POST_PROJECT,
 } from '../actions/project.js';

const initialState = {
  allprojects: [],
  errorMessageProject: '',
  userHasNoProject : true,
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return {
        ...state,
        allprojects: action.project,
      };
    case ERROR_MESSAGE_DASHBOARD:
      return {
        ...state,
        errorMessageProject: action.value,
      };
    case USER_HAS_NO_PROJECT:
      return {
        ...state,
        userHasNoProject: true,
      };
    case VALIDATION_POST_PROJECT:
      return {
        ...state,
        userHasNoProject : false,
      };
    default:
      return state;
  }
};

export default dashboard;

import { 
  SAVE_PROJECTS,
  ERROR_MESSAGE_DASHBOARD,
 } from '../actions/dashboard.js';

 import {
   VALIDATION_POST_PROJECT,
 } from '../actions/project.js';

 import {
   LOGOUT,
 } from '../actions/user.js';

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
    case VALIDATION_POST_PROJECT:
      return {
        ...state,
        userHasNoProject : false,
        errorMessageProject: '',
      };
    case LOGOUT:
      return {
        ...state,
        allprojects: initialState.allprojects,
      };
    default:
      return state;
  }
};

export default dashboard;

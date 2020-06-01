import { 
  SAVE_PROJECTS,
  SAVE_DAYS_DY_TAGNAME,
  ERROR_MESSAGE_DASHBOARD,
 } from '../actions/dashboard.js';

 import {
   VALIDATION_POST_PROJECT,
   EDITOR_PROJECT,
 } from '../actions/project.js';

 import {
   LOGOUT,
 } from '../actions/user.js';

 import {
  EDITOR_DAY,
 } from '../actions/day';

const initialState = {
  allprojects: [],
  alldaysByTagName: [],
  errorMessageProject: '',
  userHasNoProject : true,
  editorDay: false,
  editorProject: false,
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return {
        ...state,
        allprojects: action.project,
      };
    case SAVE_DAYS_DY_TAGNAME:
      return {
        ...state,
        alldaysByTagName: action.day,
      };
    case ERROR_MESSAGE_DASHBOARD:
      return {
        ...state,
        errorMessageProject: action.value,
      };
    case VALIDATION_POST_PROJECT:
      return {
        ...state,
        userHasNoProject: false,
        errorMessageProject: '',
      };
    case EDITOR_DAY:
      return {
        ...state,
        editorDay: true,
        editorProject: false,
      };
    case EDITOR_PROJECT:
      return {
        ...state,
        editorProject: true,
        editorDay: false,
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

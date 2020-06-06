import { 
  SAVE_PROJECTS,
  SAVE_DAYS_BY_TAGNAME,
  ERROR_MESSAGE_DASHBOARD,
  DISPATCH_DAYS_OF_PROJECT,
  DISPATCH_ONE_PROJECT,
 } from '../actions/dashboard.js';

 import {
   VALIDATION_POST_PROJECT,
 } from '../actions/project.js';

 import {
   LOGOUT,
 } from '../actions/user.js';


const initialState = {
  allprojects: [],
  oneProject: [],
  daysOfProject: [],
  alldaysByTagName: [],
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
    case DISPATCH_DAYS_OF_PROJECT:
      return {
        ...state,
        daysOfProject: action.days,
      };
    case DISPATCH_ONE_PROJECT:
        return {
          ...state,
          oneProject: action.project,
        };
    case SAVE_DAYS_BY_TAGNAME:
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

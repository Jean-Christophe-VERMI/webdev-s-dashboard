import { 
  SAVE_PROJECTS,
  SAVE_DAYS_BY_TAGNAME,
  DISPATCH_DAYS_OF_PROJECT,
  DISPATCH_ONE_PROJECT,
  USER_HAS_NO_PROJECT,
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
  userHasNoProject : false,
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return {
        ...state,
        allprojects: action.project,
      };
    case USER_HAS_NO_PROJECT:
      return {
        ...state,
        userHasNoProject: true,
        errorMessageProject: action.value,
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
    case VALIDATION_POST_PROJECT:
      return {
        ...state,
        userHasNoProject: false,
      };
    case LOGOUT:
      return {
        ...state,
        allprojects: initialState.allprojects,
        userHasNoProject: initialState.userHasNoProject,
        errorMessageProject: initialState.errorMessageProject,
      };
    default:
      return state;
  }
};

export default dashboard;

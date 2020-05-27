import { 
  SAVE_PROJECTS,
  USER_HAS_NO_PROJECT,
  ERROR_MESSAGE_DASHBOARD,
 } from '../actions/dashboard.js';

const initialState = {
  allprojects: [],
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
    default:
      return state;
  }
};

export default dashboard;

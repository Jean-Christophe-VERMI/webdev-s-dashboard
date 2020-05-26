import { 
  SAVE_PROJECTS,
  HAS_ERROR,
  ERROR_MESSAGE,
 } from '../actions/dashboard.js';

const initialState = {
  allprojects: [],
  errorMessageProject: '',
  hasError : false,
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return {
        ...state,
        allprojects: action.project,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessageProject: action.value,
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

export default dashboard;

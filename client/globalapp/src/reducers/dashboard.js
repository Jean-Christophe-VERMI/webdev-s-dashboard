import { 
  FETCH_ALL_PROJECTS,
  FETCH_FILTRED_PROJECTS,
  ERROR_MESSAGE,
 } from '../actions/dashboard.js';

const initialState = {
  allprojects: [],
  errorMessageProject: '',
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ALL_PROJECTS:
      return {
        ...state,
        allprojects: action.project,
      };
    case FETCH_FILTRED_PROJECTS:
      return {
        ...state,
        allprojects: action.project,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessageProject: action.value,
      };
    default:
      return state;
  }
};

export default dashboard;

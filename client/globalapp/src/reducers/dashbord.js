import { CURRENT_DAY } from '../actions/dashbord.js';

const initialState = {
  projects: [],
  days: [],
};

const dashbord = (state = initialState, action = {}) => {
  switch (action.type) {
    case CURRENT_DAY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default dashbord;

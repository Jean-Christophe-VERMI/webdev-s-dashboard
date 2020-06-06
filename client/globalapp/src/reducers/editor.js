import {
   EDITOR_PROJECT,
 } from '../actions/project.js';

 import {
  EDITOR_DAY,
 } from '../actions/day';

 import {
   REDIRECT_ACTION
 } from '../actions/editor';

const initialState = {
  editorDay: false,
  editorProject: false,
  isRedirect: false,
};

const editor = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case REDIRECT_ACTION:
        return {
          ...state,
          isRedirect: true,
        };
    default:
      return state;
  }
};

export default editor;

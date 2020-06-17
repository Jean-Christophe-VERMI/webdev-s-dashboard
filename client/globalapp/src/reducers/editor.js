import {
   EDITOR_PROJECT,
   VALIDATION_EDIT_PROJECT,
 } from '../actions/project.js';

 import {
  EDITOR_DAY,
 } from '../actions/day';

 import {
   REDIRECT_ACTION,
   NOT_EMPTY_FIELD_TITLE,
   EMPTY_FIELD_TITLE,
 } from '../actions/editor';

 import {
   CLEAR_EDITOR,
 } from '../actions/dashboard';

const initialState = {
  editorDay: false,
  editorProject: false,
  isRedirect: false,
  isModifyTitle: false,
  isEmptyFieldTitle: true,
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
    case NOT_EMPTY_FIELD_TITLE:
      return {
        ...state,
        isEmptyFieldTitle: false,
      };
    case EMPTY_FIELD_TITLE:
      return {
        ...state,
        isEmptyFieldTitle: initialState.isEmptyFieldTitle,
      };
    case VALIDATION_EDIT_PROJECT:
        return {
          ...state,
          isRedirect: initialState.isRedirect,
          isModifyTitle: initialState.isModifyTitle,
          isEmptyFieldTitle:initialState.isEmptyFieldTitle,
        };
    case CLEAR_EDITOR:
      return {
        ...state,
        editorDay: initialState.editorDay,
        editorProject: initialState.editorProject,
      };
    default:
      return state;
  }
};

export default editor;

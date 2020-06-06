export const REDIRECT_ACTION = 'REDIRECT_ACTION';
export const NOT_EMPTY_FIELD_TITLE = 'NOT_EMPTY_FIELD_TITLE';
export const EMPTY_FIELD_TITLE = 'EMPTY_FIELD_TITLE';

export const redirectAction = () => ({
  type: REDIRECT_ACTION,
});

export const notEmptyFieldTitle = () => ({
  type: NOT_EMPTY_FIELD_TITLE,
});

export const emptyFieldTitle = () => ({
  type: EMPTY_FIELD_TITLE,
});
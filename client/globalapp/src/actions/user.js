export const CHANGE_VALUE = 'CHANGE_VALUE';
export const MODIFY_FIELD = 'MODIFY_FIELD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_VALIDATION = 'CLEAR_VALIDATION';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const SEND_USER = 'SEND_USER';
export const SEND_TOKEN = 'SEND_TOKEN';
export const SEND_AUTH_INFOS = 'SEND_AUTH_INFOS';
export const ADD_USER_INFOS = 'ADD_USER_INFOS';
export const SAVE_JWT = 'SAVE_JWT';
export const EMPTY_USER = 'EMPTY_USER';
export const HAS_ERROR_AUTH = 'HAS_ERROR_AUTH';
export const HAS_ERROR_REGISTER = 'HAS_ERROR_REGISTER';
export const HAS_ERROR_VERIF_EMAIL = 'HAS_ERROR_VERIF_EMAIL';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const VALIDATION_SIGNUP = 'VALIDATION_SIGNUP';
export const VALIDATION_EMAIL = 'VALIDATION_EMAIL';
export const VALIDATION_AUTH = 'VALIDATION_AUTH';
export const VERIFY_CALLBACK = 'VERIFY_CALLBACK';
export const CHANGE_USER_INFOS = 'CHANGE_USER_INFOS';
export const TOGGLE_OPEN_MODIFY = 'TOOGLE_OPEN_MODIFY';
export const UPDATE_USER_INFOS = 'UPDATE_USER_INFOS';
export const DELETE_USER = 'DELETE_USER';


export const hasErrorAuth = () => ({
  type: HAS_ERROR_AUTH,
});

export const hasErrorRegister = () => ({
  type: HAS_ERROR_REGISTER,
});

export const hasErrorVerifEmail = () => ({
  type: HAS_ERROR_VERIF_EMAIL,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const modifyField = (value, key) => ({
  type: MODIFY_FIELD,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const clearValidation = () => ({
  type: CLEAR_VALIDATION,
});

export const sendUser = (value, key) => ({
  type: SEND_USER,
  value,
  key,
});

export const sendToken = (value, key) => ({
  type: SEND_TOKEN,
  value,
  key,
});

export const sendAuthInfos = (value, key) => ({
  type: SEND_AUTH_INFOS,
  value,
  key,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const addUserInfos = (user) => ({
  type: ADD_USER_INFOS,
  payload: user,
});

export const saveJwt = (token) => ({
  type: SAVE_JWT,
  token,
});

export const emptyUser = () => ({
  type: EMPTY_USER,
});

export const errorMsg = (value) => ({
  type: ERROR_MESSAGE,
  value,
});

export const validationSignup = () => ({
  type: VALIDATION_SIGNUP,
});

export const validationEmail = () => ({
  type: VALIDATION_EMAIL,
});

export const validationAuth = () => ({
  type: VALIDATION_AUTH,
});

export const verifyCallback = (response) => ({
  type: VERIFY_CALLBACK,
  response,
});

export const changeUserInfos = (newName) => ({
  type: CHANGE_USER_INFOS,
  newName,
});

export const updateUserInfos = (name) => ({
  type: UPDATE_USER_INFOS,
  name,
});

export const toggleOpenModify = () => ({
  type: TOGGLE_OPEN_MODIFY,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

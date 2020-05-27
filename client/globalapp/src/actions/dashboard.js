export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const FETCH_FILTRED_PROJECTS = 'FETCH_FILTRED_PROJECTS';
export const USER_HAS_NO_PROJECT = 'USER_HAS_NO_PROJECT';
export const ERROR_MESSAGE_DASHBOARD = 'ERROR_MESSAGE_DASHBOARD';
export const SAVE_PROJECTS = 'SAVE_PROJECTS';


export const fetchAllProjects = () => ({
  type: FETCH_ALL_PROJECTS,
});

export const fetchFiltredProjects = () => ({
  type: FETCH_FILTRED_PROJECTS,
});

export const userHasNoProject = () => ({
  type: USER_HAS_NO_PROJECT,
});

export const errorMsgDashboard = (value) => ({
  type: ERROR_MESSAGE_DASHBOARD,
  value,
});

export const saveProjects = (project) => ({
  type: SAVE_PROJECTS,
  project,
});
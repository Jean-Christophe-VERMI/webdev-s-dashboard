export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const FETCH_FILTRED_PROJECTS = 'FETCH_FILTRED_PROJECTS';
export const HAS_ERROR = 'HAS_ERROR';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const SAVE_PROJECTS = 'SAVE_PROJECTS';


export const fetchAllProjects = () => ({
  type: FETCH_ALL_PROJECTS,
});

export const fetchFiltredProjects = () => ({
  type: FETCH_FILTRED_PROJECTS,
});

export const hasError = () => ({
  type: HAS_ERROR,
});

export const errorMsg = (value) => ({
  type: ERROR_MESSAGE,
  value,
});

export const saveProjects = (project) => ({
  type: SAVE_PROJECTS,
  project,
});
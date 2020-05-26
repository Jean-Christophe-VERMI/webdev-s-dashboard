export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const FETCH_FILTRED_PROJECTS = 'FETCH_FILTRED_PROJECTS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';


export const fetchAllProjects = () => ({
  type: FETCH_ALL_PROJECTS,
});

export const fetchFiltredProjects = () => ({
  type: FETCH_FILTRED_PROJECTS,
});

export const errorMsg = (value) => ({
  type: ERROR_MESSAGE,
  value,
});
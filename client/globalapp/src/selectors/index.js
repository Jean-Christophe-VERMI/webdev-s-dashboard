import slugify from 'slugify';


// Project 
export const getSlugByProjectTitle = (title) => {
  const modifiedTitle = title.replace('&', '').replace('_', '-');
  const slug = slugify(modifiedTitle, {
    lower: true,
  });
  return slug;
};

export const getUrlByProjectTitle = (title) => {
  const url = `/projets/${getSlugByProjectTitle(title)}`;
  return url;
};

export const getUrlByProjectTitleEditer = (title) => {
  const url = `/projets/${getSlugByProjectTitle(title)}/editer-projet`;
  return url;
};

export const getUrlByProjectTitleEditerJour = (title) => {
  const url = `/projets/${getSlugByProjectTitle(title)}/editer-jour`;
  return url;
};


/*
export const getProjectBySlug = (Projects, slug) => {
  // eslint-disable-next-line arrow-body-style
  const Project = Projects.find((currentProject) => {
    return getSlugByProjectTitle(currentProject.title) === slug;
  });
  return Project;
};

export const getProjectsByIds = (ids, Projects) => {
  let selectedProjects = Projects.filter((Project) => ids.includes(Project.id));
  selectedProjects = selectedProjects.map((Project) => Project.title);
  return selectedProjects;
};

*/

// Day
export const getSlugByDayDate = (date) => {
  const modifiedDate = date.replace('&', '').replace('_', '-');
  const slug = slugify(modifiedDate, {
    lower: true,
  });
  return slug;
};

export const getUrlByDayDate = (date) => {
  const url = `/jours/${getSlugByDayDate(date)}`;
  return url;
};

/*
export const getDayBySlug = (Days, slug) => {
  // eslint-disable-next-line arrow-body-style
  const Day = Days.find((currentDay) => {
    return getSlugByDayDate(currentDay.date) === slug;
  });
  return Day;
};

export const getProjectsByIds = (ids, Projects) => {
  let selectedProjects = Projects.filter((Project) => ids.includes(Project.id));
  selectedProjects = selectedProjects.map((Project) => Project.title);
  return selectedProjects;
};
*/


// Tag
export const getSlugByTagName = (name) => {
  const modifiedName = name.replace('&', '').replace('_', '-');
  const slug = slugify(modifiedName, {
    lower: true,
  });
  return slug;
};

export const getUrlByTagName = (name) => {
  const url = `/tags/${getSlugByTagName(name)}`;
  return url;
};

/*
export const getThreadBySlug = (Projects, slug) => {
  // eslint-disable-next-line arrow-body-style
  const Project = Projects.find((currentProject) => {
    return getSlugByProjectTitle(currentProject.title) === slug;
  });
  return Project;
};

export const getProjectsByIds = (ids, Projects) => {
  let selectedProjects = Projects.filter((Project) => ids.includes(Project.id));
  selectedProjects = selectedProjects.map((Project) => Project.title);
  return selectedProjects;
};

*/

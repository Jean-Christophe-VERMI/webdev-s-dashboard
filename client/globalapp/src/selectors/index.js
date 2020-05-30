import slugify from 'slugify';

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

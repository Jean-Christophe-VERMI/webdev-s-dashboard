export const getProject = async () => {
  try {
    const projetId = currentProjectId;
    const projetTitle = currentProjectTitle;
    const response = await axios.get(`http://localhost:4000/projets/${projetId}/${projetTitle}`);
    const project = await response.data;
    setProjet(project);
    setDays(project.days);

  } catch (error) {
    console.log(error);
  }
};
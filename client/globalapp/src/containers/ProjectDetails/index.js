import { connect } from 'react-redux';

import ProjectDetails from '../../components/ProjectDetails';

import { editProject, dispatchCurrentProject, editorProject } from '../../actions/project';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
  currentProject: state.project.currentProject,
  title: state.project.title,
  description: state.project.description,
  catégorie_type: state.project.catégorie_type,
  catégorie_état: state.project.catégorie_état,
  favori: state.project.favori,
  image: state.project.image,
});

const mapDispatchToProps = (dispatch) => ({
  editProject: (value, name) => {
    dispatch(editProject(value, name));
  },
  editorProject: () => {
    dispatch(editorProject());
  },
  dispatchCurrentProject: (id) => {
    dispatch(dispatchCurrentProject(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
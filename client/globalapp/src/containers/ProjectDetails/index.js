import { connect } from 'react-redux';

import ProjectDetails from '../../components/ProjectDetails';

import { dispatchDaysOfProject, dispatchOneProject } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
  daysOfProject: state.dashboard.daysOfProject,
  currentProject: state.project.currentProject,
  validationEditProject: state.project.validationEditProject,
  validationMessageEditProject: state.project.validationMessageEditProject,
  title: state.project.title,
  description: state.project.description,
  catégorie_type: state.project.catégorie_type,
  catégorie_état: state.project.catégorie_état,
  favori: state.project.favori,
  image: state.project.image,
  userId : state.main.userId,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDaysOfProject: (days) => {
    dispatch(dispatchDaysOfProject(days));
  },
  dispatchOneProject: (project) => {
    dispatch(dispatchOneProject(project));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
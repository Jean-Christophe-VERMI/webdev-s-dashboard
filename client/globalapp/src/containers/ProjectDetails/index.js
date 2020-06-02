import { connect } from 'react-redux';

import ProjectDetails from '../../components/ProjectDetails';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
  currentProject: state.project.currentProject,
  validationEditProject: state.project.validationEditProject,
  validationMessageEditProject: state.project.validationMessageEditProject,
  title: state.project.title,
  description: state.project.description,
  catégorie_type: state.project.catégorie_type,
  catégorie_état: state.project.catégorie_état,
  favori: state.project.favori,
  image: state.project.image,
});

const mapDispatchToProps = (dispatch) => ({
  
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
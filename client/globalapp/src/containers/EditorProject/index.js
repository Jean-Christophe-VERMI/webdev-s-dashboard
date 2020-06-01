import { connect } from 'react-redux';

import EditorProject from '../../components/EditorProject';

import { editProject, modifyFieldProject, clearErrorProject, clearValidationProject } from '../../actions/project';

const mapStateToProps = (state) => ({
  currentProject: state.project.currentProject,
  title: state.project.title,
  description: state.project.description,
  catégorie_type: state.project.catégorie_type,
  catégorie_état: state.project.catégorie_état,
  validationEditProject: state.project.validationEditProject,
  hasErrorPostProject: state.project.hasErrorPostProject,
  errorMessagePostProject: state.project.errorMessagePostProject,
  validationMessageEditProject: state.project.validationMessageEditProject,
});

const mapDispatchToProps = (dispatch) => ({
  editProject: (value, name) => {
    dispatch(editProject(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyFieldProject(value, name));
  },
  clearErrorProject: () => {
    dispatch(clearErrorProject());
  },
  clearValidationProject: () => {
    dispatch(clearValidationProject());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorProject);
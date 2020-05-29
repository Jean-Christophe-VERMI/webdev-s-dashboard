import { connect } from 'react-redux';

import NewProject from '../../components/NewProject';

import { sendProject, modifyFieldProject, clearErrorProject, clearValidationProject } from '../../actions/project';

const mapStateToProps = (state) => ({
  userId: state.main.userId,
  title: state.project.title,
  description: state.project.description,
  catégorie_type: state.project.catégorie_type,
  validationPostProject: state.project.validationPostProject,
  hasErrorPostProject: state.project.hasErrorPostProject,
  errorMessagePostProject: state.project.errorMessagePostProject,
  validationMessagePostProject: state.project.validationMessagePostProject,
});

const mapDispatchToProps = (dispatch) => ({
  sendProject: (value, name) => {
    dispatch(sendProject(value, name));
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

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
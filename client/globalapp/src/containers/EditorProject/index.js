import { connect } from 'react-redux';

import EditorProject from '../../components/EditorProject';

import { editProject, modifyFieldProject, clearErrorProject, dispatchNewTitleURL } from '../../actions/project';
import { redirectAction } from '../../actions/editor';

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
  newTitleURL: state.project.newTitleURL,
  isRedirect: state.editor.isRedirect,
});

const mapDispatchToProps = (dispatch) => ({
  editProject: (value, name) => {
    dispatch(editProject(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyFieldProject(value, name));
  },
  dispatchNewTitleURL: (title) => {
    dispatch(dispatchNewTitleURL(title));
  },
  clearErrorProject: () => {
    dispatch(clearErrorProject());
  },
  redirectAction: () => {
    dispatch(redirectAction());
  },
  
  
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorProject);
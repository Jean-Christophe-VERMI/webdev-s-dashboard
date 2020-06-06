import { connect } from 'react-redux';

import InfosProject from '../../components/InfosProject';

import { editorProject, clearValidationProject } from '../../actions/project';

const mapStateToProps = (state) => ({
  currentProjectTitle: state.project.currentProjectTitle,
  validationEditProject: state.project.validationEditProject,
  validationMessageEditProject: state.project.validationMessageEditProject,
});

const mapDispatchToProps = (dispatch) => ({
  editorProject: () => {
    dispatch(editorProject());
  },
  clearValidationProject: () => {
    dispatch(clearValidationProject());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(InfosProject);
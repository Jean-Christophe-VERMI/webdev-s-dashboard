import { connect } from 'react-redux';

import ProjectDetails from '../../components/ProjectDetails';

const mapStateToProps = (state) => ({
  validationEditProject: state.project.validationEditProject,
  currentProjectId: state.project.currentProjectId,
  currentProjectTitle: state.project.currentProjectTitle,
  hasNewDay: state.day.hasNewDay,
  userToken: state.dashboard.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
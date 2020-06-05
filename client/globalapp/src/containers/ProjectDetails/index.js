import { connect } from 'react-redux';

import ProjectDetails from '../../components/ProjectDetails';

const mapStateToProps = (state) => ({
  currentProjectId: state.project.currentProjectId,
  currentProjectTitle: state.project.currentProjectTitle,
});

const mapDispatchToProps = (dispatch) => ({
  
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
import { connect } from 'react-redux';


import ProjectList from '../../components/ProjectList';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
  errorMessageProject: state.dashboard.errorMessageProject,
  userHasNoProject: state.dashboard.userHasNoProject,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
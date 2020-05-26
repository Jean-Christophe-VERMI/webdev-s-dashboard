import { connect } from 'react-redux';


import ProjectList from '../../components/ProjectList';

const mapStateToProps = (state) => ({
  allProjects: state.dashboard.allProjects,
  errorMessageProject: state.dashboard.errorMessageProject,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
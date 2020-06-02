import { connect } from 'react-redux';

import DaysNav from '../../components/DaysNav';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
  currentProject: state.project.currentProject,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysNav);
import { connect } from 'react-redux';

import DaysNav from '../../components/DaysNav';

const mapStateToProps = (state) => ({
  daysOfProject: state.dashboard.daysOfProject,
  currentProject: state.project.currentProject,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysNav);
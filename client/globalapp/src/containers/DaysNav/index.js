import { connect } from 'react-redux';

import DaysNav from '../../components/DaysNav';

import { addNewDay } from '../../actions/day';

const mapStateToProps = (state) => ({
  daysOfProject: state.dashboard.daysOfProject,
  currentProject: state.project.currentProject,
});

const mapDispatchToProps = (dispatch) => ({
  addNewDay: () => {
    dispatch(addNewDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysNav);
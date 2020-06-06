import { connect } from 'react-redux';

import DaysNav from '../../components/DaysNav';

import { addNewDay, clearValidationDay } from '../../actions/day';

const mapStateToProps = (state) => ({
  daysOfProject: state.dashboard.daysOfProject,
  currentProject: state.project.currentProject,
  validationPostDay: state.day.validationPostDay,
  validationMessagePostDay: state.day.validationMessagePostDay,
});

const mapDispatchToProps = (dispatch) => ({
  addNewDay: () => {
    dispatch(addNewDay());
  },
  clearValidationDay: () => {
    dispatch(clearValidationDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysNav);
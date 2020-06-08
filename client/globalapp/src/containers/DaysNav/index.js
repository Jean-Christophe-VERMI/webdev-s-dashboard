import { connect } from 'react-redux';

import DaysNav from '../../components/DaysNav';

import { addNewDay, clearValidationDay, modifyFieldDay } from '../../actions/day';

const mapStateToProps = (state) => ({
  daysOfProject: state.dashboard.daysOfProject,
  currentProject: state.project.currentProject,
  validationPostDay: state.day.validationPostDay,
  validationMessagePostDay: state.day.validationMessagePostDay,
  dayDate: state.day.dayDate,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, name) => {
    dispatch(modifyFieldDay(value, name));
  },
  addNewDay: () => {
    dispatch(addNewDay());
  },
  clearValidationDay: () => {
    dispatch(clearValidationDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysNav);
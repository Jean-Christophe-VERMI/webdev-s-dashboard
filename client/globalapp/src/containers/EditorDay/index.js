import { connect } from 'react-redux';

import EditorDay from '../../components/EditorDay';

import { editDay, modifyFieldDay } from '../../actions/day';

const mapStateToProps = (state) => ({
  text: state.day.text,
  currentDay: state.day.currentDay,
  currentProjectId: state.project.currentProjectId,
  currentProjectTitle: state.project.currentProjectTitle,
});

const mapDispatchToProps = (dispatch) => ({
  editDay: (value, name) => {
    dispatch(editDay(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyFieldDay(value, name));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorDay);
import { connect } from 'react-redux';

import EditorDay from '../../components/EditorDay';

import { editDay, modifyFieldDay, saveDataText } from '../../actions/day';

const mapStateToProps = (state) => ({
  text: state.day.text,
  textFromData: state.day.textFromData,
  currentDay: state.day.currentDay,
  currentProjectId: state.project.currentProjectId,
  currentProjectTitle: state.project.currentProjectTitle,
});

const mapDispatchToProps = (dispatch) => ({
  editDay: (value, name) => {
    dispatch(editDay(value, name));
  },
  onChangeText: (value, name) => {
    dispatch(modifyFieldDay(value, name));
  },
  saveDataText: (value) => {
    dispatch(saveDataText(value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(EditorDay);
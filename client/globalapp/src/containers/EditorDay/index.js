import { connect } from 'react-redux';

import EditorDay from '../../components/EditorDay';

import { editDay, modifyFieldDay, saveDataText, saveDataCode, clearValidationEditDay } from '../../actions/day';

const mapStateToProps = (state) => ({
  text: state.day.text,
  code: state.day.code,
  textFromData: state.day.textFromData,
  codeFromData: state.day.codeFromData,
  currentDay: state.day.currentDay,
  currentProjectId: state.project.currentProjectId,
  currentProjectTitle: state.project.currentProjectTitle,
  validationEditDay: state.day.validationEditDay,
  validationMessageEditDay: state.day.validationMessageEditDay,
});

const mapDispatchToProps = (dispatch) => ({
  editDay: (value, name) => {
    dispatch(editDay(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyFieldDay(value, name));
  },
  saveDataText: (value) => {
    dispatch(saveDataText(value));
  },
  saveDataCode: (value) => {
    dispatch(saveDataCode(value));
  },
  clearValidationEditDay: () => {
    dispatch(clearValidationEditDay());
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(EditorDay);
import { connect } from 'react-redux';

import { dispatchCurrentDay, editorDay } from '../../actions/day';

import Day from '../../components/Day';

const mapStateToProps = (state) => ({
  currentProjectTitle: state.project.currentProjectTitle,
  currentDay: state.day.currentDay,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentDay: (id) => {
    dispatch(dispatchCurrentDay(id));
  },
  editorDay: () => {
    dispatch(editorDay());
  },

});


export default connect(mapStateToProps, mapDispatchToProps)(Day);
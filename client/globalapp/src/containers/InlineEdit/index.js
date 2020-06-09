import { connect } from 'react-redux';

import InlineEdit from '../../components/InlineEdit';

import { editFieldDay } from '../../actions/day';

const mapStateToProps = (state) => ({
  text: state.day.text,
  textFromData: state.day.textFromData,
});

const mapDispatchToProps = (dispatch) => ({
  
  onChange: (value, name) => {
    dispatch(editFieldDay(value, name));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(InlineEdit);
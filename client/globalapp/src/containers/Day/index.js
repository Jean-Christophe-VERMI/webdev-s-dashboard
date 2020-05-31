import { connect } from 'react-redux';

import { dispatchCurrentDay } from '../../actions/day';

import Day from '../../components/Day';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentDay: (id) => {
    dispatch(dispatchCurrentDay(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Day);
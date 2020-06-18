import { connect } from 'react-redux';

import { dispatchCurrentTechnoName } from '../../actions/techno';

import Techno from '../../components/Techno';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentTechnoName: (name) => {
    dispatch(dispatchCurrentTechnoName(name));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Techno);
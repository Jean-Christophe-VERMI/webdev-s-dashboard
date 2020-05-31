import { connect } from 'react-redux';

import { dispatchCurrentTagName } from '../../actions/tag';

import Tag from '../../components/Tag';

const mapStateToProps = (state) => ({
  allprojects: state.dashboard.allprojects,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentTagName: (name) => {
    dispatch(dispatchCurrentTagName(name));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Tag);
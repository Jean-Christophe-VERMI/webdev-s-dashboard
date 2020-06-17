import { connect } from 'react-redux';

import NoProject from '../../components/NoProject';

const mapStateToProps = (state) => ({
  userHasNoProject: state.dashboard.userHasNoProject,
});

const mapDispatchToProps = (dispatch) => ({
 
});


export default connect(mapStateToProps, mapDispatchToProps)(NoProject);
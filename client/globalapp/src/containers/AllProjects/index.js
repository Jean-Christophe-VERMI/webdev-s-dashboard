import { connect } from 'react-redux';

import AllProjects from '../../components/AllProjects';

const mapStateToProps = (state) => ({
  userId: state.main.userId,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects);
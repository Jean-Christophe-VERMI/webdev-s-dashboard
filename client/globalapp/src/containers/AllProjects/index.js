import { connect } from 'react-redux';

import AllProjects from '../../components/AllProjects';

import { fetchAllProjects } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  userId: state.main.userId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProjects: () => {
    dispatch(fetchAllProjects());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects);
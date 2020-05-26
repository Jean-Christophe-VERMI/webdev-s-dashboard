import { connect } from 'react-redux';

import SearchProjectBar from '../../components/SearchProjectBar';

import { fetchAllProjects } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  userId: state.main.userId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProjects: () => {
    dispatch(fetchAllProjects());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjectBar);
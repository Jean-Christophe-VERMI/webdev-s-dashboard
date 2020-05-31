import { connect } from 'react-redux';

import App from '../../components/App';

import { fetchAllProjects } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  isLogged: state.main.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProjects: () => {
    dispatch(fetchAllProjects());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
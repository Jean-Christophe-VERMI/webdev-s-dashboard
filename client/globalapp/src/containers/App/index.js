import { connect } from 'react-redux';

import App from '../../components/App';

import { } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  isLogged: state.main.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
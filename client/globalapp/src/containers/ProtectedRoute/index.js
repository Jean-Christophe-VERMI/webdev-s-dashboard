import { connect } from 'react-redux';

import ProtectedRoute from '../../components/ProtectedRoute';

import {} from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  isLogged: state.main.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
import { connect } from 'react-redux';

import App from '../../components/App';

// import { sendAuthInfos, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.main.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
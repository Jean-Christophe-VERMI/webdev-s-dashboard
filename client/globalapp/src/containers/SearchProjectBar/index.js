import { connect } from 'react-redux';

import SearchProjectBar from '../../components/SearchProjectBar';

const mapStateToProps = (state) => ({
  userId: state.main.userId,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjectBar);
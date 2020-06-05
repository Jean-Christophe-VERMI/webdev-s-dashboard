import { connect } from 'react-redux';

import { dispatchCurrentProjectId, dispatchCurrentProjectTitle } from '../../actions/project';

import Project from '../../components/Project';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentProjectId: (id) => {
    dispatch(dispatchCurrentProjectId(id));
  },
  dispatchCurrentProjectTitle: (title) => {
    dispatch(dispatchCurrentProjectTitle(title));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Project);

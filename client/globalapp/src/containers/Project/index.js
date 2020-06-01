import { connect } from 'react-redux';

import { dispatchCurrentProject } from '../../actions/project';

import Project from '../../components/Project';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentProject: (id) => {
    dispatch(dispatchCurrentProject(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Project);

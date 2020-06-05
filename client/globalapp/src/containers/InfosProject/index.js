import { connect } from 'react-redux';

import InfosProject from '../../components/InfosProject';

import { editorProject } from '../../actions/project';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  editorProject: () => {
    dispatch(editorProject());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(InfosProject);
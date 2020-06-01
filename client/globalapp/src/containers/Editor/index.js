import { connect } from 'react-redux';

import Editor from '../../components/Editor';

// import {} from '../../actions/editor';

const mapStateToProps = (state) => ({
  editorDay: state.editor.editorDay,
  editorProject: state.editor.editorProject,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
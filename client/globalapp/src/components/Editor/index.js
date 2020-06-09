import React from 'react';

// component
//import EditorProject from '../EditorProject';
//import EditorDay from '../EditorDay';

// container
import EditorProject from '../../containers/EditorProject';
import EditorDay from '../../containers/EditorDay';

import logo from './logo.png';
import EditorStyled from './EditorStyled';

const Editor = ({ editorProject, editorDay }) => {
  
  return (
    <EditorStyled>
      {!editorDay && !editorProject && (
        <img src={logo} className="logo" alt="logo" />
      )}
      {editorDay && (
        <EditorDay />
      )}
      {editorProject && (
        <EditorProject />
      )}
    </EditorStyled>
    
  );
};

export default Editor;

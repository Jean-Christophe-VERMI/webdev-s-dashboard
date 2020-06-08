import React from 'react';

// component
//import EditorProject from '../EditorProject';
//import EditorDay from '../EditorDay';

// container
import EditorProject from '../../containers/EditorProject';
import EditorDay from '../../containers/EditorDay';

import iconFolder from './folder.svg';
import EditorStyled from './EditorStyled';

const Editor = ({ editorProject, editorDay }) => {
  
  return (
    <EditorStyled>
      {!editorDay && !editorProject && (
        <img src={iconFolder} className="folder-icon" alt="folder icon" />
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

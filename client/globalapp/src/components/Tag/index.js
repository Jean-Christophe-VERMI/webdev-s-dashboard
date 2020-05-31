import React from 'react';

import { Link } from 'react-router-dom';
import { getUrlByTagName } from '../../selectors/index';

import TagStyled from './TagStyled';

const Tag = ({ name, id, dispatchCurrentTagName, allprojects  }) => {
  
  return (
    <TagStyled>
      <div className='tagname'>
      <Link
            className='tag'
            onClick={() => {
              dispatchCurrentTagName(name);
            }}
            to={getUrlByTagName(name)}
          >
            {name}
          </Link>
      </div>
    </TagStyled>
  );
};

export default Tag;
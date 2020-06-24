import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getUrlByProjectTitleEditerJour } from '../../selectors/index';
// import CreateIcon from '@material-ui/icons/Create';
// import Tooltip from '@material-ui/core/Tooltip';

import Tag from '../../containers/Tag';

import DayStyled from './DayStyled';

const Day = ({ 
  editorDay, 
  date, 
  currentProjectTitle,
  project_id, 
  id, 
  text, 
  code, 
  ref_source, 
  dispatchCurrentDay, 
  tags 
}) => {
  
  const dateFormat = Moment(date).locale('fr').format("dddd, Do MMMM YYYY");
  
  return (
    <DayStyled>
      <div className='content-day'>
          <div className="date">
            <Link
              onClick={() => {
                dispatchCurrentDay(id);
                editorDay();
              }}
              to={getUrlByProjectTitleEditerJour(currentProjectTitle, id)}
            >
              <div className='day-link'>{dateFormat}</div>
            </Link>
          </div>
          <div className="tag">
            {tags.map((tag) => (
              <Tag className="tag-link" key={tag.id} {...tag} />
            ))}
            <MoreVertIcon />
          </div>
      </div>
    </DayStyled>
  );
};

export default Day;
import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
import { Link } from 'react-router-dom';
import { getUrlByDayDate } from '../../selectors/index';

import Tag from '../../containers/Tag';

import DayStyled from './DayStyled';

const Day = ({ allprojects, date, project_id, id, text, code, ref_source, dispatchCurrentDay, tags }) => {
  
  const dateFormat = Moment(date).locale('fr').format("dddd, Do MMMM YYYY");
  
  return (
    <DayStyled>
      <div className='content-day'>
          <div className="date">
            <Link
              className='day-link'
              onClick={() => {
                dispatchCurrentDay(id);
              }}
              to={getUrlByDayDate(date)}
            >
              {dateFormat}
            </Link>
          </div>
          <div className="tag">
            <p>x</p>
            {tags.map((tag) => (
              <Tag className="tag-link" key={tag.id} {...tag} />
            ))}
            <p>ajouter</p>
          </div>
      </div>
    </DayStyled>
  );
};

export default Day;
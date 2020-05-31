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
      <div className='content'>
          <Link
            className='date'
            onClick={() => {
              dispatchCurrentDay(id);
            }}
            to={getUrlByDayDate(date)}
          >
            {dateFormat}
          </Link>
          <div className="tag">
            <p>modifier</p>
            {tags.map((tag) => (
              <Tag key={tag.id} {...tag} />
            ))}
            <p>ajouter</p>
          </div>
      </div>
    </DayStyled>
  );
};

export default Day;
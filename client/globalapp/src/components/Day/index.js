import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
import { Link } from 'react-router-dom';
import { getUrlByProjectTitle } from '../../selectors/index';

import DayStyled from './DayStyled';

const Day = ({ date, project_id, id, text, code, ref_source, dispatchCurrentDay }) => {
  
 
  const dateFormat = Moment(date).locale('fr').format("dddd, Do MMMM YYYY");

  return (
    <DayStyled>
      <div className='content'>
          <Link
            className='date'
            onClick={() => {
              dispatchCurrentDay(id);
            }}
            to={getUrlByProjectTitle(date)}
          >
            {dateFormat}
          </Link>
      </div>
    </DayStyled>
  );
};

export default Day;
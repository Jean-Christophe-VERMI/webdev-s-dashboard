import React from 'react';
// import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#90a5b8',
    primaryLight: '#eff7f6',
    primaryDark: '#9eadba',
    secondary: '#4c96d7',
    secondaryDark: '#3f51b5',
    ternary: '#1aae9f',
    quaternary: '#425483',
    danger: '#ff6b6b',
    dangerDark: '#ee5253',
    success: '#1dd1a1',
    successDark: '#10ac84',
    link: '#64a6bd',
    white: '#fff',
    black: '#000',
    darkgrey: '#7d8597'
    
  },
  fonts: {
    default: 'rubik',
    headings: 'Evolve',
  },
  lineHeight: '1.6rem',

  fontSizes: {
    mini: 'O.25rem',
    small: '0.75rem',
    default: '1em',
    large: '1.5em',
    larger: '2em',
    largest: '3em',
  },
  sizings: {
    small: '0.5em',
    medium: '1em',
    large: '2em',
    larger: '3em',
    largest: '5em',
  },
  radius: {
    small: '4',
    medium: '10px',
    large: '20px',
    round: '50%',
  },
  imageSize: {
    small: '16px',
    medium: '30px',
    large: '50px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

/*
Theme.PropTypes = {
  children: PropTypes.isRequired,
};
*/


export default Theme;
import React from 'react';
// import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#54a0ff',
    primaryDark: '#2e86de',
    secondary: '#5f27cd',
    secondaryDark: '#341f97',
    danger: '#ff6b6b',
    dangerDark: '#ee5253',
    success: '#1dd1a1',
    successDark: '#10ac84',
    white: '#fff',
    black: '#000',
    light: '#f4f4f4',
    dark: '#222f3e',
    info: '#48dbfb',
    infoDark: '#0abde3',
    link: '#48dbfb',
    linkDark: '#0abde3',
    warning: '#feca57',
    warningDark: '#ff9f43',
    greyLighter: '#DFE6E9',
    greyDarker: '#8395a7',
    peachLight: '#fab1a0',
    peachDark: '#e17055',
    lightBlue: '#82ccdd',
    darkBlue: '#0a3d62',
    mediumBlue: '#48dbfb',
  },
  fonts: {
    default: 'Raleway',
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
  children: PropTypes.node.isRequired,
};
*/

export default Theme;
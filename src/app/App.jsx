import React from 'react';
import { StylesProvider, CssBaseline } from '@material-ui/core';
import ThemeProvider from './components/seo/Theme';
import './css/reset.css';
import './css/themes.css';
import logAsciiName from '../utils/logAsciiName';

/**
 * Root element that wraps every page by Gatsby
 * This is configured in gatsby-browser.js
 */
function App({ element }) {
  logAsciiName();
  return (
    <ThemeProvider>
      <StylesProvider injectFirst>
        <CssBaseline />
        {element}
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;

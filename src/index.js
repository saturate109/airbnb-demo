import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import CssBaseline from '@material-ui/core/CssBaseline';
import jssExtend from 'jss-plugin-extend';
import jssCamelCase from 'jss-plugin-camel-case';
import Homepage from 'pages/Homepage';
import theme from 'helpers/Theme';

const jss = create({
  plugins: [...jssPreset().plugins, jssExtend(), jssCamelCase()],
});

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Homepage />
        </ThemeProvider>
      </StylesProvider>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

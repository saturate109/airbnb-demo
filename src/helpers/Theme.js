import { createMuiTheme } from '@material-ui/core/styles';

// WRT custom breakpoints: https://github.com/mui-org/material-ui/issues/21745:
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        letterSpacing: 'normal',
      },
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'mobile', 'tablet', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      mobile: 745,
      tablet: 768,
      md: 960,
      lg: 1128,
      xl: 1400,
    },
  },
  typography: {
    root: { marginBottom: '32px' },
    htmlFontSize: 15,
    body1: {
      color: '#222222',
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    h1: { fontSize: '1.802rem', letterSpacing: 0 },
    h2: { fontSize: '1.602rem', letterSpacing: 0 },
    h3: { fontSize: '1.424rem', letterSpacing: 0 },
    h4: { fontSize: '1.266rem', letterSpacing: 0 },
    h5: { fontSize: '1.125rem', letterSpacing: 0 },
    h6: { fontSize: '0.9333rem', letterSpacing: 0 },
    fontWeightLight: 500,
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: { main: '#FF385C' },
  },
});
export default theme;

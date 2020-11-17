import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    htmlFontSize: 10,
    h1: {
      fontSize: 45,
      lineHeight: '45px',
      letterSpacing: '-0.02em',
      fontWeight: 900
    },
    h2: {
      fontSize: 35,
      lineHeight: '37px',
      letterSpacing: '-0.02em',
      fontWeight: 900
    },
    h3: {
      fontSize: 30,
      lineHeight: '41px',
      letterSpacing: '-0.01em',
      fontWeight: 900
    },
    h4: {
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '-0.01em',
      fontWeight: 800
    },
    h5: {
      fontSize: 20,
      lineHeight: '29px',
      fontWeight: 'normal'
    },
    h6: {
      fontSize: 14,
      lineHeight: '19px',
      fontWeight: 'normal'
    },
    body1: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: '22px'
    },
    body2: {
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: '19px'
    },
    button: {
      fontSize: 18,
      fontWeight: 800,
      textTransform: 'capitalize'
    }
  },
  palette: {
    background: {
      default: '#FAF6F6'
    },
    primary: {
      main: '#6CBF84',
      contrastText: '#ffffff',
      dark: '#2F2B27',
      light: '#C0A9A8'
    },
    secondary: {
      main: '#F26889',
      dark: '#544B3F',
      light: '#816E68'
    },
    error: {
      main: '#FF0000'
    },
    action: { disabled: '#EEEEEE' }
  }
});

import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  inputs: {
    border: '2px solid #C0A9A8',
    borderRadius: '5px',
    padding: '16px 12px',
    '&:hover': {
      borderColor: '#998685'
    },
    '&.StripeElement--focus': {
      borderColor: '#2F2B27'
    },
    '&.StripeElement--invalid': {
      borderColor: '#ff0000'
    }
  },

  formWrapper: {
    width: '100%',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',

    '& fieldset': {
      border: '0',
      padding: '0',
      margin: '0'
    },
    '& legend': {
      background: '#FAF6F6',
      marginTop: '-9px',
      position: 'absolute',
      marginLeft: '12px',
      paddingLeft: '5px',
      paddingRight: '5px',
      fontSize: '13.5px'
    }
  },
  title: {
    marginBottom: '40px',
    marginTop: '20px'
  },
  subTitle: {
    marginBottom: '10px',
    marginTop: '20px'
  },
  form: {
    width: '100%',
    marginTop: '20px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',

    '& .MuiFormHelperText-root.Mui-error': {
      marginLeft: '18px',
      height: '1em',
      marginTop: '4px'
    }
  },
  formGroup: {
    marginBottom: '20px',
    '& > *': {
      marginBottom: '20px'
    }
  },
  submitButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  hidden: {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden'
  },

  helpText: {
    fontSize: '16px',
    color: '#544B3F',
    display: 'block',
    margin: '8px 0 0 16px'
  },

  error: {
    color: 'red',
    marginLeft: '15px',
    fontSize: '12px',
    marginTop: '3px',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    position: 'absolute',
    marginBottom: -20
  },

  formLabel: {
    color: '#544B3F',
    fontSize: '16px',
    lineHeight: '22px',
    marginBottom: '4px'
  },

  basketImg: {
    marginBottom: '30px',
    textAlign: 'center'
  },

  orderNumer: {
    fontWeight: '800',
    fontSize: '26px',
    lineHeight: '32px',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    color: '#6CBF84',
    display: 'block',
    marginBottom: '10px'
  },

  loaderOverlay: {
    position: 'fixed',
    backgroundColor: '#faf6f6',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default styles;

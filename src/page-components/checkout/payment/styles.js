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
    },

    p: {
      fontSize: 14
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
    },

    '& p.Mui-error': {
      fontSize: 14
    }
  },

  helpText: {
    fontSize: '16px',
    color: '#544B3F',
    display: 'block',
    margin: '8px 0 0 16px'
  },

  formLabel: {
    color: '#544B3F',
    fontSize: '16px',
    lineHeight: '22px',
    marginBottom: '4px'
  }
});

export default styles;

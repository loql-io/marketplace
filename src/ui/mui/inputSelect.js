import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    inputSelect: {
      width: '100%',
      height: 56,

      '&:select': {
        background: 'transparent'
      },

      '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
        border: '3px solid #2F2B27'
      },

      '& fieldset.MuiOutlinedInput-notchedOutline': {
        border: '2px solid #C0A9A8',
        borderRadius: 5
      },

      '&:disabled': {
        borderColor: '2px solid #C4C4C4',
        color: '#C4C4C4'
      },

      '& .MuiFormHelperText-root': {
        whiteSpace: 'nowrap',
        position: 'absolute',
        bottom: -20
      },

      '& select:invalid + fieldset': {
        border: '2px solid #FF0000'
      },

      '& .MuiInputLabel-outlined': {
        color: 'inherit'
      },

      '& .MuiSelect-icon': {
        width: 40,
        height: 40,
        top: 10
      }
    }
  })
);

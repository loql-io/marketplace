import { makeStyles, createStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingBottom: 6
    },

    dateTextInput: {
      '& .MuiInputLabel-outlined': {
        position: 'relative',
        fontSize: 12,
        top: '2 !important'
      },

      '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, 16px) scale(1) !important'
      }
    },

    textInput: {
      maxWidth: '100%',
      width: 345,
      minHeight: 68,
      height: 'auto',

      '& .MuiInputAdornment-root': {
        alignItems: 'flex-end',
        height: '100%',
        maxHeight: '79%',
        marginRight: 1,
        flex: 1,
        marginTop: 14,
        '& p': {
          color: theme.palette.primary.dark
        }
      },

      '& .MuiOutlinedInput-adornedStart': {
        background: 'white'
      },

      '& .MuiOutlinedInput-adornedEnd': {
        background: 'white'
      },

      '& .MuiInputBase-input': {
        marginTop: 2,
        paddingBottom: 6,
        background: 'white'
      },

      '&:input, &:textarea': {
        background: 'transparent'
      },

      '& input:valid:focus + fieldset, & textarea:valid:focus + fieldset': {
        border: `1px solid ${theme.palette.primary.dark}`
      },

      '& .MuiFormLabel-root.Mui-focused': {
        color: '#816E68'
      },

      '& input:valid + fieldset': {
        border: '1px solid #C0A9A8',
        borderRadius: 5
      },

      '& fieldset': {
        '& legend': {
          width: 0
        }
      },

      '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderWidth: 2
      },

      '&:input:disabled ': {
        borderColor: '1px solid red',
        color: '#C4C4C4'
      },

      '& .MuiFormHelperText-root': {
        fontSize: 12,
        whiteSpace: 'nowrap'
      },

      '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 16px) scale(1)'
      },

      '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, 7px) scale(0.75)'
      },

      '& .PrivateNotchedOutline': {
        width: 0
      },

      '& .MuiOutlinedInput-multiline': {
        background: '#fff'
      }
    }
  })
);

export default styles;

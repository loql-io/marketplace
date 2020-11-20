import { makeStyles, createStyles } from '@material-ui/core';

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex'
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '100%',
      height: 44,

      boxShadow: '0px 1px #C0A9A8',
      background: theme.palette.primary.main,
      border: `3px solid ${theme.palette.primary.main} `,
      borderRadius: '8px',

      color: '#2F2B27',
      fontSize: 18,
      fontWeight: 800,
      padding: 0,
      textTransform: 'initial',

      transition: 'all ease-in-out 0.2s',

      '&:disabled': {
        boxShadow: '0px 0px ',
        backgroundColor: '#EEEEEE',
        border: '#EEEEEE',
        color: '#C4C4C4'
      },

      '&:focus': {
        border: '2px solid',
        borderColor: theme.palette.secondary.dark
      },

      '&:hover': {
        borderColor: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.light,
        color: '#fff'
      }
    },
    icon: { fontSize: 30, position: 'absolute', left: 4 }
  })
);

export default styles;

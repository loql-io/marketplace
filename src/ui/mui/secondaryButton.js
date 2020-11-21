import { makeStyles, createStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex'
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: 345,
      height: 44,

      boxShadow: '0px 1px #C0A9A8',
      background: theme.palette.primary.dark,
      border: `3px solid ${theme.palette.primary.dark}`,
      borderRadius: '8px',

      color: 'white',
      fontSize: 18,
      fontWeight: 800,

      padding: 0,
      textTransform: 'initial',
      transition: 'all ease-in-out 0.2s',

      '&:focus': {
        border: '2px solid',
        borderColor: theme.palette.primary.main
      },

      '&:disabled': {
        boxShadow: '0px 0px ',
        backgroundColor: '#EEEEEE',
        border: '#EEEEEE',
        color: '#C4C4C4'
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

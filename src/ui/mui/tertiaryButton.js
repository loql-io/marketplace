import { makeStyles, createStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex'
    },

    button: {
      width: 140,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      border: 0,
      borderRadius: '6px',
      background: '#E9E2DF',
      boxShadow: '0px 1px #C0A9A8',

      color: theme.palette.primary.dark,
      fontSize: 14,
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
        borderColor: theme.palette.secondary.dark,
        border: '1px solid'
      },

      '&:hover': {
        borderColor: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.light,
        color: '#fff'
      }
    },
    icon: { fontSize: 22, position: 'absolute', left: 4 }
  })
);

export default styles;

import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.7)',
    zIndex: 999
  },
  inline: {
    padding: '20px',
    width: 'auto',
    height: 'auto'
  },

  message: {
    fontWeight: 800,
    marginTop: 30,
    color: '#2F2B27'
  }
});

export default styles;

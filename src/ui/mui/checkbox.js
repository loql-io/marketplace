import { createStyles, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>
  createStyles({
    checkbox: {
      '& .MuiCheckbox-root': {
        borderWidth: 1,
        stroke: theme.palette.secondary.light
      },
      '& .Mui-disabled': {},
      '& .MuiCheckbox-colorSecondary .Mui-checked': {
        stroke: theme.palette.primary.main
      }
    }
  })
);
export default styles;

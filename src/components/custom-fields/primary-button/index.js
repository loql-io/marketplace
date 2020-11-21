import React from 'react';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';

import styles from '../../../ui/mui/primaryButton';

export default function PrimaryButton({ text, icon, ...rest }) {
  const classes = styles();
  return (
    <Button
      variant="outlined"
      className={classes.button}
      {...rest}
      startIcon={icon && <Icon className={classes.icon}>{icon}</Icon>}
    >
      {text}
    </Button>
  );
}

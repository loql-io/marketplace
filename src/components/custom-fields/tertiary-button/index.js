import React from 'react';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';

import styles from '../../../ui/mui/tertiaryButton';

export default function TertiaryButton({ text, icon, ...rest }) {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Button
        variant="outlined"
        className={classes.button}
        startIcon={icon && <Icon>{icon}</Icon>}
        {...rest}
      >
        {text}
      </Button>
    </div>
  );
}

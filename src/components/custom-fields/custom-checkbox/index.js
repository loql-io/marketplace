import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import styles from '../../../ui/mui/checkbox';

export default function CustomCheckbox(props) {
  const classes = styles();
  return (
    <Checkbox
      className={classes.checkbox}
      {...props}
      icon={<img src="/static/unchecked_checkbox.svg" />}
      checkedIcon={<img src="/static/checked_checkbox.svg" />}
    />
  );
}

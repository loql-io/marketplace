import TextField from '@material-ui/core/TextField';

import React from 'react';

import styles from '../../../ui/mui/inputTextField';

export default function CustomTextInputField(props) {
  const classes = styles();
  const { type } = props;
  return (
    <div className={classes.container}>
      {type === 'date' && (
        <TextField
          variant="outlined"
          className={`${classes.textInput} ${classes.dateTextInput}`}
          {...props}
        />
      )}
      {type !== 'date' && (
        <TextField
          variant="outlined"
          className={classes.textInput}
          {...props}
        />
      )}
    </div>
  );
}

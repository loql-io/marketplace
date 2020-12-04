import React from 'react';
import Lottie from 'react-lottie';
import { Grid, Typography } from '@material-ui/core';

import animationData from '../../../public/static/loader.json';
import styles from './styles';

function CustomLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={60} width={60} />;
}

export default function Loader({ message, inline }) {
  const classes = styles();

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
      justify="center"
      className={`${inline ? classes.inline : classes.loader}`}
    >
      <div>
        <CustomLoader />
      </div>
      {message && (
        <Typography
          className={classes.message}
          component="strong"
          variant="body1"
          align="center"
        >
          {message}
        </Typography>
      )}
    </Grid>
  );
}

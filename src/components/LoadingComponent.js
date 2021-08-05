import React from 'react'
import { Box, CircularProgress, LinearProgress } from '@material-ui/core';
import { useStyles } from './Styles';

export const LoadingComponent = () => {
    const classes = useStyles();
    return (
      <LinearProgress color='secondary' className={classes.progressBar}/>
    );
  };
  


export const LoadingComponentModal = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loadingModal}>
      <CircularProgress size={50} />
    </Box>
  );
};

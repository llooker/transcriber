import React from 'react'
import { LinearProgress } from '@material-ui/core';
import { useStyles } from './Styles';

export const LoadingComponent = () => {
    const classes = useStyles();
    return (
      <LinearProgress color='secondary' className={classes.progressBar}/>
    );
  };
  
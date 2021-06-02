import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    '& > *': {
      margin: "4px",
      padding: '6px 33px',
      backgroundColor: '#fff',
      borderRadius: "41px",
      color: '#a3a3a3 !important',
      fontSize: '14px',
      width: '100%',
    },
    width: '100%',
  }),
}));

export default function HTextField(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        size='medium'
      />
    </form>
  );
}
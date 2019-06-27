import MoreIcon from '@material-ui/icons/MoreHorizRounded';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 50
  }
}));

export default function IconButtons() {
  const classes = useStyles();
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        aria-label="more">
        <MoreIcon />
      </Button>
    </>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const primaryButton = (props) => (
    <Button {...props} disableRipple={true} variant="contained" color="primary">{props.children}</Button>
);

export default withStyles(theme => ({
    root: {
      boxShadow: "none",
      '&:hover': {
        background: theme.palette.primary.light,
        boxShadow: "none",
      },
      '&:active': {
        background: theme.palette.primary.main,
        boxShadow: 'none',
      },
      '&:focus': {
      },
    },
  }))(primaryButton);
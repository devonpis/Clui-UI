import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const SecondaryButton = (props) => (
    <Button {...props} disableRipple={true} variant="outlined" color="primary">{props.children}</Button>
);

export default withStyles(theme => ({
    root: {
      boxShadow: "none",
      '&:hover': {
        background: "#F9FAFB",
        boxShadow: "none",
        borderColor: "rgba(15,40,80,0.3)"
      },
      '&:active': {
        background: "#E9F4F9",
        boxShadow: 'none',
        borderColor: "rgba(15,40,80,0.3)"
      },
      '&:focus': {
      },
    },
  }))(SecondaryButton);
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

/**
- santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
**/

const PrimaryButton = (props) => (
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
    sizeLarge: {
      padding: "12px 22px",
      fontSize: 16
    }
  }))(PrimaryButton);
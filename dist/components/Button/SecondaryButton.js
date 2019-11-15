import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

var SecondaryButton = function SecondaryButton(props) {
  return React.createElement(Button, Object.assign({}, props, {
    disableRipple: true,
    variant: "outlined",
    color: "primary"
  }), props.children);
};

export default withStyles(function (theme) {
  return {
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
      '&:focus': {}
    }
  };
})(SecondaryButton);
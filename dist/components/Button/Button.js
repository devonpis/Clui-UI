import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
/**
With `Button` santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
**/

export var baseButton = function baseButton(props) {
  return React.createElement(Button, props, props.children);
};
baseButton.defaultProps = {
  variant: 'text',
  size: 'medium',
  disabled: false,
  color: 'default'
};
var button = withStyles(function (theme) {
  return {
    root: {
      boxShadow: "none !important",
      '&:hover': {},
      '&:active': {},
      '&:focus': {}
    },
    sizeLarge: {
      padding: "12px 22px",
      fontSize: theme.typography.button.fontSizeLarge
    }
  };
})(baseButton);
export default button;
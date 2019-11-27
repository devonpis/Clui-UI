import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';
/**
https://material-ui.com/components/buttons/

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars
**/

export var baseButton = function baseButton(props) {
  return React.createElement(ThemeProvider, {
    theme: globalTheme
  }, React.createElement(Button, props, props.children));
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
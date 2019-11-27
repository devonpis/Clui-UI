import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';
/**
https://material-ui.com/components/checkboxes/

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.
**/

var checkbox = function checkbox(props) {
  return React.createElement(Checkbox, props, props.children);
};

export default checkbox;
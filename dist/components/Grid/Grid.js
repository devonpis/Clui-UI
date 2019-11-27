import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';
/**
https://material-ui.com/components/grid/

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.
**/

var grid = function grid(props) {
  return React.createElement(ThemeProvider, {
    theme: globalTheme
  }, React.createElement(Grid, props, props.children));
};

export default grid;
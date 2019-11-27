import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';
/**
https://material-ui.com/components/container/

While containers can be nested, most layouts do not require a nested container.
**/

var container = function container(props) {
  return React.createElement(ThemeProvider, {
    theme: globalTheme
  }, React.createElement(Container, props, props.children));
};

export default container;
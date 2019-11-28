import React from 'react';
import AppBar from '@material-ui/core/AppBar';
/**
https://material-ui.com/components/app-bar/

The top App Bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.
**/

var appBar = function appBar(props) {
  return React.createElement(AppBar, props, props.children);
};

export default appBar;
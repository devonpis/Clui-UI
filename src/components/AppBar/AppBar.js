import React from 'react';
import AppBar from '@material-ui/core/AppBar';

/**
https://material-ui.com/components/app-bar/

The top App Bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.
**/

const appBar = (props) => (
    <AppBar {...props}>{props.children}</AppBar>
);

export default appBar;
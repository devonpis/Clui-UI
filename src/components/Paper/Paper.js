import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';

/**
https://material-ui.com/components/paper/

The background of an application resembles the flat, opaque texture of a sheet of paper, and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets.
**/

const paper = (props) => (
    <ThemeProvider theme={globalTheme}>
        <Paper {...props}>{props.children}</Paper>
    </ThemeProvider>
);

export default paper;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';

/**
https://material-ui.com/components/grid/

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.
**/

const grid = (props) => (
    <ThemeProvider theme={globalTheme}>
        <Grid {...props}>{props.children}</Grid>
    </ThemeProvider>
);

export default grid;
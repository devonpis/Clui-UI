import React from 'react';
import Grid from '@material-ui/core/Grid';

/**
https://material-ui.com/components/grid/

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.
**/

const grid = (props) => (
    <Grid {...props}>{props.children}</Grid>
);

export default grid;
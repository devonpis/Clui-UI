import React from 'react';
import { Grid, Paper } from '../src/index';

export default {
  title: 'Grid',
  parameters: {
    component: Grid,
    componentSubtitle: 'The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.',
  },
};

export const grid = () => (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
);
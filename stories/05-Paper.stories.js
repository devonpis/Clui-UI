import React from 'react';
import { Paper, Typography } from '../src/index';

export default {
  title: 'Paper',
  parameters: {
    component: Paper,
    componentSubtitle: 'In Material Design, the physical properties of paper are translated to the screen.',
  },
};

export const paper = () => (    
    <Paper>
        <Typography variant="h5" component="h3">
            This is a sheet of paper.
        </Typography>
        <Typography component="p">
            Paper can be used to build surface or other elements for your application.
        </Typography>
    </Paper>
);
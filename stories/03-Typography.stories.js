import React from 'react';
import { Typography } from '../src/index';

export default {
  title: 'Typography',
  parameters: {
    component: Typography,
    componentSubtitle: 'Typography subtitle',
  },
};

export const base = () => (
    <Typography>This is base typography</Typography>
);

export const h1 = () => (
    <Typography variant="h1" component="h1">This is h1</Typography>
);

export const h2 = () => (
    <Typography variant="h2" component="h2">This is h2</Typography>
);

export const h3 = () => (
    <Typography variant="h3" component="h3">This is h3</Typography>
);

export const h4 = () => (
    <Typography variant="h4" component="h4">This is h4</Typography>
);

export const h5 = () => (
    <Typography variant="h5" component="h5">This is h5</Typography>
);

export const h6 = () => (
    <Typography variant="h6" component="h6">This is h6</Typography>
);

export const subtitle1 = () => (
    <Typography variant="subtitle1" component="p">This is subtitle1</Typography>
);

export const subtitle2 = () => (
    <Typography variant="subtitle2" component="p">This is subtitle2</Typography>
);

export const body1 = () => (
    <Typography variant="body1" component="p">This is body1</Typography>
);

export const body2 = () => (
    <Typography variant="body2" component="p">This is body2</Typography>
);

export const caption = () => (
    <Typography variant="caption" component="p">This is caption</Typography>
);

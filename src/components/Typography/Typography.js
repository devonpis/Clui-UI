import React from 'react';
import Typography from '@material-ui/core/Typography';

const typography = (props) => (
    <Typography {...props}>{props.children}</Typography>
);

export default typography;
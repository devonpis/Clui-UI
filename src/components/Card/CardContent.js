import React from 'react';
import CardContent from '@material-ui/core/CardContent';

const cardContent = (props) => (
    <CardContent {...props}>{props.children}</CardContent>
);

export default cardContent;
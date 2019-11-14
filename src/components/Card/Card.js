import React from 'react';
import Card from '@material-ui/core/Card';

const card = (props) => (
    <Card {...props}>{props.children}</Card>
);

export default card;
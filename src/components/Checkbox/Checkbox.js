import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const checkbox = (props) => (
    <Checkbox {...props}>{props.children}</Checkbox>
);

export default checkbox;
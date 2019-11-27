import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

/**
https://material-ui.com/components/checkboxes/

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.
**/

const checkbox = (props) => (
    <Checkbox {...props}>{props.children}</Checkbox>
);

export default checkbox;
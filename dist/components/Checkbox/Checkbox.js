import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

var checkbox = function checkbox(props) {
  return React.createElement(Checkbox, props, props.children);
};

export default checkbox;
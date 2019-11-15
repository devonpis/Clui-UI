import React from 'react';
import Typography from '@material-ui/core/Typography';

var typography = function typography(props) {
  return React.createElement(Typography, props, props.children);
};

export default typography;
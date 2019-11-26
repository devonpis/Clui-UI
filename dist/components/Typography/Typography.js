import React from 'react';
import Typography from '@material-ui/core/Typography';
/**
With `Typography` santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
**/

var typography = function typography(props) {
  return React.createElement(Typography, props, props.children);
};

typography.defaultProps = {
  variant: 'body1',
  component: 'div'
};
export default typography;
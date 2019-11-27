import React from 'react';
import Typography from '@material-ui/core/Typography';
/**
https://material-ui.com/components/typography/

Too many type sizes and styles at once can spoil any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.
**/

var typography = function typography(props) {
  return React.createElement(Typography, props, props.children);
};

typography.defaultProps = {
  variant: 'body1',
  component: 'div'
};
export default typography;
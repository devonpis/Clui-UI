import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
https://material-ui.com/components/typography/

Too many type sizes and styles at once can spoil any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.
**/

const typography = (props) => (
    <Typography {...props}>{props.children}</Typography>
);

typography.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption']),
    component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span']),
};

typography.defaultProps = {
    variant: 'body1',
    component: 'div',
};

export default typography;
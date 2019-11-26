import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

/**
With `Button` santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
**/

export const baseButton = (props) => (
    <Button {...props}>{props.children}</Button>
);

baseButton.propTypes = {
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    size: PropTypes.oneOf(['medium', 'small', 'large']),
    disabled: PropTypes.oneOf([true, false]),
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
};

baseButton.defaultProps = {
    variant: 'text',
    size: 'medium',
    disabled: false,
    color: 'default',
};

const button = withStyles(theme => ({
    root: {
      boxShadow: "none !important",
      '&:hover': {
      },
      '&:active': {
      },
      '&:focus': {
      },
    },
    sizeLarge: {
      padding: "12px 22px",
      fontSize: theme.typography.button.fontSizeLarge,
    }
  }))(baseButton);

export default button;
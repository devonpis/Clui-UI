import React from 'react';
import CardContent from '@material-ui/core/CardContent';

var cardContent = function cardContent(props) {
  return React.createElement(CardContent, props, props.children);
};

export default cardContent;
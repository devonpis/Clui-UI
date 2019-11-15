import React from 'react';
import Card from '@material-ui/core/Card';

var card = function card(props) {
  return React.createElement(Card, props, props.children);
};

export default card;
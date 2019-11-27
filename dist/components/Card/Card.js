import React from 'react';
import Card from '@material-ui/core/Card';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';
/**
https://material-ui.com/components/buttons/

Cards are surfaces that display content and actions on a single topic.
They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
**/

var card = function card(props) {
  return React.createElement(ThemeProvider, {
    theme: globalTheme
  }, React.createElement(Card, props, props.children));
};

export default card;
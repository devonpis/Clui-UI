import React from 'react';
import Paper from '@material-ui/core/Paper';
/**
https://material-ui.com/components/paper/

The background of an application resembles the flat, opaque texture of a sheet of paper, and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets.
**/

var paper = function paper(props) {
  return React.createElement(Paper, props, props.children);
};

export default paper;
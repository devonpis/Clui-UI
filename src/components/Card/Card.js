import React from 'react';
import Card from '@material-ui/core/Card';

/**
https://material-ui.com/components/card/

Cards are surfaces that display content and actions on a single topic.
They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
**/

const card = (props) => (
    <Card {...props}>{props.children}</Card>
);

export default card;
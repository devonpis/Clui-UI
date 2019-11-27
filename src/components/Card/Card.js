import React from 'react';
import Card from '@material-ui/core/Card';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';

/**
https://material-ui.com/components/buttons/

Cards are surfaces that display content and actions on a single topic.
They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
**/

const card = (props) => (
    <ThemeProvider theme={globalTheme}>
        <Card {...props}>{props.children}</Card>
    </ThemeProvider>
);

export default card;
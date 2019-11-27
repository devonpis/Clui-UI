import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from '../../globalTheme';

/**
https://material-ui.com/components/container/

While containers can be nested, most layouts do not require a nested container.
**/

const container = (props) => (
    <ThemeProvider theme={globalTheme}>
        <Container {...props}>{props.children}</Container>
    </ThemeProvider>
);

export default container;
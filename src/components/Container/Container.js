import React from 'react';
import Container from '@material-ui/core/Container';

/**
https://material-ui.com/components/container/

While containers can be nested, most layouts do not require a nested container.
**/

const container = (props) => (
    <Container {...props}>{props.children}</Container>
);

export default container;
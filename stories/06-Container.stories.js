import React from 'react';
import { Container, Typography } from '../src/index';

export default {
  title: 'Container',
  parameters: {
    component: Container,
    componentSubtitle: 'The container centers your content horizontally. It\'s the most basic layout element.',
  },
};

export const container = () => (    
    <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '240px' }} />
    </Container>
);
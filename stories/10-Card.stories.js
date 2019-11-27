import React from 'react';
import { Card, CardContent, Typography } from '../src/index';

export default {
  title: 'Card',
  parameters: {
    component: Card,
    componentSubtitle: 'Cards contain content and actions about a single subject.',
  },
};

export const card = () => (
    <Card>
        <CardContent>
            <Typography variant="h5" component="h2">This is a card</Typography>
            <Typography variant="body2" component="p">card description...</Typography>
        </CardContent>
    </Card>
);

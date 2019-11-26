import React from 'react';
import { Card, CardContent, Typography } from '../src/index';

export default {
  title: 'Card',
};

export const card = () => (
    <Card>
        <CardContent>
            <Typography variant="h5" component="h2">This is a card</Typography>
            <Typography variant="body2" component="p">card description...</Typography>
        </CardContent>
    </Card>
);

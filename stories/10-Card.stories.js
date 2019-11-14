import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/Card/Card';
import CardContent from '../src/components/Card/CardContent';
import Typography from '../src/components/Typography/Typography';

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

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, BaseButton } from '../src/index';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  parameters: {
    component: BaseButton,
    componentSubtitle: 'Button subtitle',
  },
};

export const baseButton = () => (
  <Button 
    onClick={action('clicked')}
    size={select('Size', ['medium', 'small', 'large'])}
    disabled={boolean('Disabled')}
    variant={select('Variant', ['contained', 'outlined', 'text'])}
    color={select('Color', ['default', 'inherit', 'primary', 'secondary'])}
  >
    Button
  </Button>
);

baseButton.story = {
  decorators: [withKnobs],
};

export const primaryButton = () => (
  <Button 
    onClick={action('clicked')}
    size={select('Size', ['medium', 'small', 'large'])}
    disabled={boolean('Disabled')}
    variant="contained"
    color="primary"
  >
    Primary button
  </Button>
);

primaryButton.story = {
  decorators: [withKnobs],
};

export const secondaryButton = () => (
  <Button 
    onClick={action('clicked')}
    size={select('Size', ['medium', 'small', 'large'])}
    disabled={boolean('Disabled')}
    variant="outlined"
    color="primary"
  >
    Secondary button
  </Button>
);

secondaryButton.story = {
  decorators: [withKnobs],
};

export const textButton = () => (
  <Button 
    onClick={action('clicked')}
    size={select('Size', ['medium', 'small', 'large'])}
    disabled={boolean('Disabled')}
    variant="text"
    color="primary"
  >
    Text button
  </Button>
);

textButton.story = {
  decorators: [withKnobs],
};
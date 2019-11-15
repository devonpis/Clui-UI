import React from 'react';
import { action } from '@storybook/addon-actions';
import PrimaryButton from '../src/components/Button/PrimaryButton';
import SecondaryButton from '../src/components/Button/SecondaryButton';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',

  parameters: {
    component: PrimaryButton,
    componentSubtitle: 'Button for CTA',
  },
};

export const primaryButton = () => (
  <PrimaryButton 
    onClick={action('clicked')}
    size={select('Size', ['medium', 'small', 'large'])}
    disabled={boolean('Disabled')}
  >
    Primary buttonn
  </PrimaryButton>
);

primaryButton.story = {
  decorators: [withKnobs],
};

export const secondaryButton = () => <SecondaryButton onClick={action('clicked')}>Secondary button</SecondaryButton>;
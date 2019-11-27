import React from 'react';
import Checkbox from '../src/components/Checkbox/Checkbox';

export default {
  title: 'Checkbox',
  parameters: {
    component: Checkbox,
    componentSubtitle: 'Checkboxes allow the user to select one or more items from a set.',
  },
};

export const base = () => <Checkbox></Checkbox>;
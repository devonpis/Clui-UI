import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import globalTheme from '../src/globalTheme';
import { ThemeProvider } from '@material-ui/core/styles';

addDecorator(story => (
    <>
        <ThemeProvider theme={globalTheme}>
            {story()}
        </ThemeProvider>
    </>
  ));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

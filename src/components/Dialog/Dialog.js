import React from 'react';
import Dialog from '@material-ui/core/Dialog';

/**
https://material-ui.com/components/dialogs/

A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.
**/

const dialogs = (props) => (
    <Dialog {...props}>{props.children}</Dialog>
);

export default dialogs;
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '../src/index';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default {
  title: 'App Bar',
  parameters: {
    component: AppBar,
    componentSubtitle: 'The App Bar displays information and actions relating to the current screen.',
  },
};

export const appBar = () => {
    const classes = useStyles();
    return (    
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                This is an App Bar
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
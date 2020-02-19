import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}));

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" className={classes} color="inherit" >
                    News
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
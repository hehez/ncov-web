import React from 'react';
import { Tabs, Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

const Footer = props => {
    return (
        <Paper square>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
            >
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
            </Tabs>
        </Paper>
    )
};

export default Footer;
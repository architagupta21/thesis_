import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import InsertChart from '@material-ui/icons/InsertChart';
import SettingsIcon from '@material-ui/icons/Settings';
import { withRouter, Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

function Layout(props) {
    const { classes, children, history } = props;

    console.log(props);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        COPUS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem
                        button
                        onClick={() => {
                            console.log('go to home');
                            history.push('/');
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            console.log('go to edit');
                            history.push('/edit');
                        }}
                    >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            history.push('/observation');
                        }}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Date Entry" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            console.log('go to analysis page');
                            history.push('/analysis');
                        }}
                    >
                        <ListItemIcon>
                            <InsertChart />
                        </ListItemIcon>
                        <ListItemText primary="Data Analysis" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

Layout.propTypes = {
    classes: PropTypes.any.isRequired,
};

export default withRouter(withStyles(styles)(Layout));

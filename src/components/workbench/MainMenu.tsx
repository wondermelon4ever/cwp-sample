import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Router, Switch } from 'react-router-dom';

import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import WorkIcon from '@material-ui/icons/Work';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';

const drawerWidth = 320;
const useStyles = makeStyles(() => ({
  drawerContainer: {
    overflow: 'auto',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

interface MainMenuProps {
  open: boolean,
  width: number,
  closedCallback: closedCallback
}

interface closedCallback {
  (): void;
}

var closedCallback: closedCallback;

const MainMenu = (props: MainMenuProps) => {
  const classes = useStyles();

  const handleDrawerClose = () => {
    closedCallback = props.closedCallback;
    closedCallback();
  }

  return (
    <div>
        <Drawer
          anchor="left"
          open={ props.open }
          className={classes.drawer}
          variant="persistent"
          classes={{ paper: classes.drawerPaper, }}
        >
          <Toolbar />
          <div role="presentation" className={classes.drawerContainer} onClick={handleDrawerClose}>
            <List>
              <ListItem button key="Home">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <Link to="/tp1"><ListItemText primary="Home" /></Link>
              </ListItem>
              <ListItem button key="My Projects">
                <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
                {/* <Link to="/tp2"><ListItemText primary="My Projects" /></Link> */}
                <Link 
                  to={{ 
                    pathname: '/tp1', 
                    state: { viewId: 'examplePane1ContentView'  }}}>
                      <ListItemText primary="My Projects" />
                </Link>
                {/* <Link to="/tp2" params={{ leftMenus: examplesLeftMenu }} ><ListItemText primary="My Projects" /></Link> */}
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key="Task">
                <ListItemIcon><WorkIcon /></ListItemIcon>
                <Link 
                  to={{ 
                    pathname: '/tp2', 
                    state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true }}}>
                      <ListItemText primary="Task" />
                </Link>
              </ListItem>
              <ListItem button key="Job">
                <ListItemIcon><AssignmentTurnedInIcon /></ListItemIcon>
                <Link 
                  to={{ 
                    pathname: '/tp1', 
                    state: { viewId: 'examplePane1ContentView2'  }}}>
                      <ListItemText primary="Job" />
                </Link>
              </ListItem>
              <ListItem button key="Script">
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText primary="Script" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key="Cooperation">
                <ListItemIcon><GroupWorkIcon /></ListItemIcon>
                  <ListItemText primary="Cooperation" />
              </ListItem>
              <ListItem button key="Analysis">
                <ListItemIcon><AssessmentIcon /></ListItemIcon>
                  <ListItemText primary="Analysis" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key="Announcement">
                <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                  <ListItemText primary="Announcement" />
              </ListItem>
              <ListItem button key="Notification">
                <ListItemIcon><NotificationsIcon /></ListItemIcon>
                  <ListItemText primary="Notification" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key="Support">
                <ListItemIcon><AccessibilityIcon /></ListItemIcon>
                  <ListItemText primary="Support" />
              </ListItem>
              <ListItem button key="User Manual">
                <ListItemIcon><MenuBookIcon /></ListItemIcon>
                  <ListItemText primary="User Manual" />
              </ListItem>
              <Divider />
              <ListItem button key="Setting">
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="Setting" />
              </ListItem>
              <ListItem button key="Administration">
                <ListItemIcon><SupervisedUserCircleIcon /></ListItemIcon>
                  <ListItemText primary="Administration" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
  );
}

export {
  MainMenu
}
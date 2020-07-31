import React from 'react';
import clsx from 'clsx';

import { AppBar, Badge, CssBaseline, IconButton, InputBase, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

// import { MainMenu } from './MainMenu';
import { MainMenu } from './MainMenu2';
import { useStyles, profileMenuId, renderProfileMenu, moreMenuId, renderMoreMenu } from './HeaderMenuHelper';

export default function HeaderMenu() {
  const classes = useStyles();
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isMoreMenuOpen = Boolean(moreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMoreMenuOpen = (event: any) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    setMoreAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const profileMenu = renderProfileMenu(profileAnchorEl, isProfileMenuOpen, handleMenuClose);
  const moreMenu = renderMoreMenu(moreAnchorEl, isMoreMenuOpen, handleMenuClose, handleProfileMenuOpen);

  return (
    <div className={classes.grow}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open && classes.hide})}> */}
      <AppBar position="fixed" className={clsx(classes.appBar,)}>
        <Toolbar>
          <IconButton 
            edge="start" 
            // className={clsx(classes.menuButton, open && classes.hide)} 
            className={clsx(classes.menuButton, open)} 
            color="inherit" 
            aria-label="open drawer" 
            onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <a href="http://localhost:4000" style={{ textDecoration: 'none', color: 'white' }}>HPC Workbench Portal</a>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Setting">
              <IconButton aria-label="Setting" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <SettingsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Help">
              <IconButton aria-label="Help" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <LanguageIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Help">
              <IconButton aria-label="Help" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <HelpIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="About">
              <IconButton aria-label="About this system" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <InfoIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notification">
              <IconButton aria-label="show 25 new notifications" color="inherit">
                <Badge badgeContent={25} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Administration">
              <IconButton aria-label="administration menu" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <SupervisorAccountIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton 
              aria-label="show more" 
              aria-controls={moreMenuId} 
              aria-haspopup="true" 
              onClick={handleMoreMenuOpen} 
              color="inherit" >
              <MoreIcon />
            </IconButton>
            <Tooltip title="Profile">
              <IconButton 
                edge="end" 
                aria-label="account of current user" 
                aria-controls={profileMenuId} 
                aria-haspopup="true" 
                onClick={handleProfileMenuOpen}
                color="inherit" >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <MainMenu open={open} closedCallback={handleDrawerClose} width={350}/>
      {moreMenu}
      {profileMenu}
    </div>
  );
}
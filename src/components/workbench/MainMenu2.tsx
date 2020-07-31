import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';

import MainMenuItem from './MainMenuItem';
import MainMenuItem2 from './MainMenuItem2';
import { mainMenuItems } from './MainMenuItemHelper';

import MainMenuItemComponent from './MainMenuItemComponent';

interface MainMenuProps {
  open: boolean,
  width: number,
  closedCallback: closedCallback
}

interface closedCallback {
  (): void;
}

var closedCallback: closedCallback;

const MainMenu: React.FC<any> = (props: MainMenuProps) => { 
  const classes = useStyles()

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
          <List component="nav" className={classes.mainMenu} >
            { 
              mainMenuItems.map((item, index) => (
              // <MainMenuItem {...item} key={index} />
              <MainMenuItem key={index} {...item} />
            )
            )}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

const drawerWidth = 320;
const useStyles = makeStyles(theme =>
  createStyles({
    mainMenu: {
      width: 319
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
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
  }),
)

export { MainMenu }
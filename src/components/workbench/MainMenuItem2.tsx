import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';

import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

import MainMenuItemComponent from './MainMenuItemComponent';

// React runtime PropTypes
export const MainMenuItemPropTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
  state: {}
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type MainMenuItemPropTypes = PropTypes.InferProps<typeof MainMenuItemPropTypes>
type MainMenuItemPropsWithoutItems = Omit<MainMenuItemPropTypes, 'items'>

// Improve child items declaration
export type MainMenuItemProps = MainMenuItemPropsWithoutItems & {
  items?: MainMenuItemProps[]
}

const MainMenuItem2: React.FC<MainMenuItemProps> = props => {
  const { type, name, link, Icon, items = [], state, } = props
  const url:string = (link === undefined || link == null) ? "/" : link as string; 
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  function MenuItemRoot () { 
    if(type === "Divider") {
      return (<Divider />);
    }

    return (
      <div style={{width: 319 }}>
      <ListItem button key={ name } className={classes.menuItem} >
        {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
        )}
        <Link to={{ pathname: url, state: state }}>
          <ListItemText primary={name} inset={!Icon}/>
        </Link>
        {isExpandable && open && <IconExpandMore className={classes.subMenuIcon} onClick={handleClick}/>}
        {isExpandable && open && <IconExpandLess className={classes.subMenuIcon} onClick={handleClick}/>}
      </ListItem>
      </div>
    // <MainMenuItemComponent key={ name } className={classes.menuItem} link={link} state={ state } onClick={handleClick}>
    //   {/* Display an icon if any */}
    //   {!!Icon && (
    //     <ListItemIcon className={classes.menuItemIcon}>
    //       <Icon />
    //     </ListItemIcon>
    //   )}
    //   <ListItemText primary={name} inset={!Icon} />
    //   {/* Display the expand menu if the item has children */}
    //   {isExpandable && !open && <IconExpandMore />}
    //   {isExpandable && open && <IconExpandLess />}
    // </MainMenuItemComponent>
  )
}

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <MainMenuItem2 {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot()}
      {MenuItemChildren}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
      padding: 10,
      width: '100%'
    },
    menuItemIcon: {
      color: '#97c05c',
    },
    subMenuIcon: {
      
    },
  }),
)

export default MainMenuItem2;
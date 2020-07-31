import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from '@material-ui/core/List';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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

const MainMenuItem: React.FC<MainMenuItemProps> = props => {
  const { type, name, link, Icon, items = [], state } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleMouseMove() {
    setOpen(!open)
  }

  function MenuItemRoot () { 
    if(type === "Divider") {
      return (<Divider />);
    }

    return (
    
    <MainMenuItemComponent key={ name } className={classes.menuItem} link={link} state={ state }>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open  && <IconExpandLess />}
    </MainMenuItemComponent>
    
  )}

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <MainMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <div onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
      {MenuItemRoot()}
      {MenuItemChildren}
    </div>
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
      padding: 10
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default MainMenuItem;
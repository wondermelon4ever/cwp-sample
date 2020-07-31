import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { Link, LinkProps, NavLink, NavLinkProps } from 'react-router-dom'

export interface MainMenuItemComponentProps {
  className?: string
  link?: string | null // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  state: {}
}

const MainMenuItemComponent: React.FC<MainMenuItemComponentProps> = props => {
  const { className, onClick, link, state, children } = props
  
  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
      // component={forwardRef((props: NavLinkProps, ref: any) => <NavLink to={{ pathname: '', state: {state}}} />)}
      to={{ pathname: link, state: state}}
      autoFocus={true}
      // to={link}
    />
  )
}

export default MainMenuItemComponent
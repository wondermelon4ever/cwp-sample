import React from 'react';
import { Badge, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Theme } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from '@material-ui/icons/Home';

import { createCustomIcon, HomesIcon, TestIcon } from '../utils/IconCreatior';

import SampleIcon from '../common/icons/SampleIcon';

interface CounterProps {
  name: string;
}

interface CounterState {
  count: number
}

var exampleContentViewInstance: ExampleContentView;

class ExampleContentView extends React.Component<CounterProps, CounterState> {
  constructor(props: any) {
    super(props)
    exampleContentViewInstance = this;
    
    this.state = {
      count: 0,
    }

    this.updateState = this.updateState.bind(this);
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  updateState(data: any) {

  }

  add() {
    this.setState({
      count: (this.state.count + 1)
    });
  }

  substract() {
    if(this.state.count > 0) {
      this.setState({
        count: (this.state.count -1)
      });
    }
  }

  render(){
    const { name } = this.props;
    const { count } = this.state; 
    const classes = styles;
    
    return (
      <div>
        <h1>{name}</h1>
        <div>Count value: { count }</div>
        <button onClick={this.substract}>-</button>&nbsp;<button onClick={this.add}>+</button>
        <div style={{height: "100%"}}>
        <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  <SampleIcon fontSize='small' color='error'/>
                </ListItemIcon>
              </ListItem>
        </List>
        </div>
      </div>
    );
  }
}

const styles = (theme: Theme) => ({
  icon: {
    color: theme.palette.primary.main,
  }
});

export default ExampleContentView;
export {
  exampleContentViewInstance
}
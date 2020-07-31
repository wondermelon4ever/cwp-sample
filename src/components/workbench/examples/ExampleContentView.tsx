import React from 'react';
import { Badge, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from '@material-ui/icons/Home';

import { createCustomIcon, HomesIcon, TestIcon } from '../utils/IconCreatior';

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
    
    return (
      <div>
        <h1>{name}</h1>
        <div>Count value: { count }</div>
        <button onClick={this.substract}>-</button>&nbsp;<button onClick={this.add}>+</button>
        <div>
        <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  {/* <Icon>
                    <img src="/oWCDrNcv01.svg" />
                  </Icon> */}
                  <SvgIcon color="primary" >
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </SvgIcon>
                </ListItemIcon>
              </ListItem>
        </List>
        </div>
      </div>
    );
  }
}

export default ExampleContentView;
export {
  exampleContentViewInstance
}
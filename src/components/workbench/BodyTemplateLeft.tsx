import React from 'react';
import { Link } from 'react-router-dom';

import { Divider, Icon, List, ListItem, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';
import createLeftMenus from './BodyTemplateLeftMenuHelper';

interface BodyTemplateLeftProps {
  makeIcon: any,
  title: string,
  link: string,
  leftMenuKey: string,
  leftMenus: Array<BodyTemplateLeftMenu>,
  onSelectCallback: any,
  fromTemplate?: boolean,
  selectedMenu: string | undefined | null
}

interface BodyTemplateLeftState {
  makeIcon: any,
  title: string,
  link: string,
  leftMenuKey: string,
  leftMenus: Array<BodyTemplateLeftMenu>
  onSelectCallback: any
}

interface BodyTemplateLeftMenu {
  menuName: string,
  makeIcon: any,
  url: string,
  selected: boolean,
  renderView: renderView
}

interface renderView {
  (data: any): any;
}

var callbacked = false;
class BodyTemplateLeft extends React.Component<BodyTemplateLeftProps, BodyTemplateLeftState> {
  constructor(props: BodyTemplateLeftProps) {
    super(props);

    var leftMenus = this.props.leftMenus;
    if(this.props.selectedMenu !== undefined && this.props.selectedMenu !== null) {
      var selectedIndex = -1, defaultSelectedIndex = -1;
      if(leftMenus !== undefined || leftMenus !== null) {
        leftMenus.map((menu, index)=>{
          if(menu.menuName === this.props.selectedMenu) {
            selectedIndex = index;
          } 
          if(menu.selected === true) {
            defaultSelectedIndex = index;
          }
        });
        
        if(selectedIndex !== defaultSelectedIndex) {
          leftMenus[selectedIndex].selected = true;
          leftMenus[defaultSelectedIndex].selected = false;
        }
      }
    }

    this.state = {
      makeIcon: this.props.makeIcon,
      title: this.props.title,
      link: this.props.link,
      leftMenuKey: this.props.leftMenuKey,
      leftMenus: leftMenus !== null ? leftMenus : [],
      onSelectCallback: this.props.onSelectCallback,
    }

    this.onSelected = this.onSelected.bind(this);
    this.renderContentArea = this.renderContentArea.bind(this);
    this.sendRequest = this.sendRequest.bind(this);

    if(this.state.leftMenus !== null && this.state.leftMenus !== undefined) {
      this.state.leftMenus.map((menu, index)=>{
        if(menu.selected === true) this.onSelected(index, false);
      });
    }
  }

  componentWillReceiveProps(nextProps: BodyTemplateLeftProps) {
    var leftMenukey = nextProps.leftMenuKey;
    var leftMenu = createLeftMenus(leftMenukey);
    var fromTemplate = nextProps.fromTemplate;

    if(callbacked == true) {
      callbacked = false;
      return;
    }

    if(nextProps.selectedMenu !== undefined && nextProps.selectedMenu !== null) {
      var selectedIndex = -1, defaultSelectedIndex = -1;
      if(leftMenu.subMenus !== undefined || leftMenu.subMenus !== null) {
        var length = leftMenu.subMenus.length;
        for(var index = 0; index < length; index++) {
          var menu = leftMenu.subMenus[index];
          if(menu.menuName === this.props.selectedMenu) {
            selectedIndex = index;
          } 
          if(menu.selected === true) {
            defaultSelectedIndex = index;
          }
        }
        
        if(selectedIndex !== defaultSelectedIndex) {
          leftMenu.subMenus[selectedIndex].selected = true;
          leftMenu.subMenus[defaultSelectedIndex].selected = false;
        }
      }
    }

    if(fromTemplate === true) {
      if(this.state.leftMenuKey === leftMenukey) {
        this.setState({
          leftMenus: leftMenu.subMenus
        });
      } else {
        this.setState({
          makeIcon: leftMenu.makeIcon,
          title: leftMenu.title,
          link: leftMenu.link,
          leftMenuKey: leftMenukey,
          leftMenus: leftMenu.subMenus !== null ? leftMenu.subMenus : [],
        });
      }
      callbacked = false;
      // this.renderContentArea(this.state.leftMenus[0].renderView, this.sendRequest(0, "GET", ""));
      
      var length = leftMenu.subMenus.length;
      for(var index = 0; index < length; index++) {
        var menu = leftMenu.subMenus[index];
        this.renderContentArea(menu.renderView, this.sendRequest(index, "GET", ""));
        break;
      }

      return;
    }    
  }

  sendRequest(index: number, method: any, props: any) {
    return ""+index;
  }

  renderContentArea(render: renderView, data: any) {
    this.state.onSelectCallback(render(data));
  }

  onSelected(index: number, mounted: boolean) {
    var leftMenus = this.state.leftMenus;
    if(leftMenus !== null){
      leftMenus.map((menu, number)=>{
        if(index === number) {
          menu.selected = true;
          callbacked = true;
          this.renderContentArea(menu.renderView, this.sendRequest(index, "GET", ""));
          // callbacked = false;
        } else {
          menu.selected = false;
        } 
      })
    }
    if(mounted) {
      this.setState({
        leftMenus: leftMenus
      });
    }
  }

  render() {
    return(
      <div>
        <List>
          <ListItem button key={this.state.title}>
            <ListItemIcon>{this.state.makeIcon}</ListItemIcon>
            {/* <Link to="/tp2" style={{textDecoration:'none', fontSize: 30}}><ListItemText primary={this.props.title}/></Link> */}
            <Link 
              to={{ pathname: this.state.link, state: { leftMenuKey: this.state.leftMenuKey, fromTemplate: true }}} 
              style={{textDecoration:'none', fontSize: 20}}>
                <label>{ this.state.title}</label>
            </Link>
          </ListItem>
          <Divider />
          <br/>
          {
            this.state.leftMenus.map((menu, index, array)=>{
              return[
                <ListItem button key={menu.menuName} selected={menu.selected} onClick={()=>{ this.onSelected(index, true)}}>
                  <ListItemIcon>{menu.makeIcon}</ListItemIcon>
                  <ListItemText primary={menu.menuName}/>
                </ListItem>
              ]
            })
          }
        </List>
      </div>
    );
  }
}

export { 
  BodyTemplateLeft,
  BodyTemplateLeftMenu,
}
import React from 'react';
import { RouteComponentProps } from 'react-router';

import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';

import { BodyTemplateLeft, BodyTemplateLeftMenu } from './BodyTemplateLeft';
import BodyTemplateContents from './BodyTemplateContents';
import createLeftMenus from './BodyTemplateLeftMenuHelper';

interface BodyTemplate2PaneProps {
  leftMenu: {
    title: string,
    titleIcon: any,
    titleLink: string,
    subMenus: Array<BodyTemplateLeftMenu>
  }
}

interface BodyTemplate2PaneState {
  leftMenu: {
    titleIcon: any,
    title: string,
    link: string,
    leftMenuKey: string,
    menus: Array<BodyTemplateLeftMenu>,
  },
  fromTemplate: boolean,
  selectedMenu: string,
  contents: string | undefined | null
}

class BodyTemplate2Pane extends React.Component<RouteComponentProps<{}, any, BodyTemplate2PaneProps | any>, BodyTemplate2PaneState>  {
  constructor(props: RouteComponentProps) {
    super(props);

    var leftMenuKey = this.props.location.state.leftMenuKey;
    var leftMenu = this.extractLeftMenu(leftMenuKey);

    this.state = {
      leftMenu: {
        title: leftMenu.title,
        titleIcon: leftMenu.titleIcon,
        link: leftMenu.link,
        leftMenuKey: leftMenuKey,
        menus: leftMenu.subMenus,
      },
      fromTemplate: this.props.location.state.fromTemplate,
      selectedMenu: this.props.location.state.selectedName,
      contents: ""
    }

    this.onSelectCallback = this.onSelectCallback.bind(this);
    this.extractLeftMenu = this.extractLeftMenu.bind(this);
  }

  extractLeftMenu(menuKey: string) {
    return createLeftMenus(menuKey);
  }

  componentWillReceiveProps(nextProps: any) {
    var leftMenukey = nextProps.location.state.leftMenuKey;
    var leftMenu = createLeftMenus(leftMenukey);
    
    this.setState({
      leftMenu: {
        title: leftMenu.title,
        titleIcon: leftMenu.titleIcon,
        link: leftMenu.link,
        leftMenuKey: leftMenukey,
        menus: leftMenu.subMenu,
      },
      fromTemplate: nextProps.location.state.fromTemplate
    });
  }

  onSelectCallback(content: any) {
    this.setState({
      contents: content,
      fromTemplate: false
    });
  }

  render() {
    return(
      <div style={{width:"100%", height: '100%', verticalAlign: 'center'}} >
        <SplitPane split="vertical" primary="second" allowResize={false}>
          <Pane size="15%" minSize="200px" maxSize="600px">
            <div style={{ width:'100%', backgroundColor:'white', height: '100%'}}>
              <BodyTemplateLeft 
                makeIcon={this.state.leftMenu.titleIcon} 
                title={this.state.leftMenu.title} 
                leftMenuKey={this.state.leftMenu.leftMenuKey }
                leftMenus={this.state.leftMenu.menus} 
                link={ this.state.leftMenu.link }
                onSelectCallback={this.onSelectCallback}
                fromTemplate={this.state.fromTemplate}
                selectedMenu={this.state.selectedMenu}/>
            </div>
          </Pane>
          <Pane size="85%">
            <div style={{ width: '100%', height: '100%'}}>
              <br/>&nbsp;
              <BodyTemplateContents contents={ this.state.contents }/>
            </div>
          </Pane>
        </SplitPane>;
      </div>
    );
  }
}

export default BodyTemplate2Pane;
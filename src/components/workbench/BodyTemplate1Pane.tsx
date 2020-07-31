import React from 'react';
import { RouteComponentProps } from 'react-router';

import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';

import BodyTemplateContents from './BodyTemplateContents';
import createContentView from './BodyTemplateContentsHelper';

interface BodyTemplate1PaneProps {
  viewId: string
}

interface BodyTemplate1PaneState {
  viewId: string
  contents: any
}

class BodyTemplate1Pane extends React.Component<RouteComponentProps<{}, any, BodyTemplate1PaneProps | any>,BodyTemplate1PaneState>  {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      viewId: this.props.location.state.viewId,
      contents: ""
    }

    this.applyContentView = this.applyContentView.bind(this);
  }

  componentDidMount() {
    this.applyContentView(this.state.viewId);
  }

  applyContentView(viewId: string) {
    var data = { viewId: viewId }
    this.setState({
      contents: createContentView(data)
    });
  }

  render() {
    return(
      <div style={{width:"100%", height: '100%', verticalAlign: 'center'}} >
        <SplitPane split="vertical" primary="second" allowResize={false} >
          <Pane size="100%">
            <div style={{ width:'100%', height: '100%'}}>
            <BodyTemplateContents viewId={ this.state.viewId } contents={ this.state.contents }/>
            </div>
          </Pane>
        </SplitPane>;
      </div>
    );
  }
}

export default BodyTemplate1Pane;
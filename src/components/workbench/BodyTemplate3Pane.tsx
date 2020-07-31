import React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';

interface BodyTemplate3PaneProps {

}

interface BodyTemplate3PaneState {

}

class BodyTemplate3Pane extends React.Component<BodyTemplate3PaneProps,BodyTemplate3PaneState>  {
  constructor(props: BodyTemplate3PaneProps) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div style={{width:"100%", height: '100%', verticalAlign: 'center'}} >
        <SplitPane split="vertical" primary="second" allowResize={false}>
          <Pane size="300px" minSize="350px" maxSize="500px">
            <div style={{ width:'350px', verticalAlign: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100%'}}>Body Left Menu Area</div>
          </Pane>
          <Pane size="70%">
            <div style={{ width: '100%', backgroundColor: 'green', height: '100%'}}>Content Area</div>
          </Pane>
          <Pane size="15%" minSize="300px" maxSize="450px">
            <div style={{ width: '300px', backgroundColor: 'green', height: '100%'}}>Right Pane area if necessary</div>
          </Pane>
        </SplitPane>;
      </div>
    );
  }
}

export default BodyTemplate3Pane;
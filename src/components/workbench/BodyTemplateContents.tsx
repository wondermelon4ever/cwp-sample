import React from 'react';
import ProTip from './Protip';
import Copyright from './Copyright';

interface BodyTemplateComponentProps {
  viewId?: string
  contents: any
}

class BodyTemplateComponent extends React.Component<BodyTemplateComponentProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      viewId: this.props.viewId,
      contents: this.props.contents
    }
  }

  render() {
    return(
      <div>
        <div style={{height: 900, width: '100%' }}>
        { this.props.contents }
        </div>
        <div>
          {/* <ProTip /> */}
          <Copyright />
        </div>
      </div>
    );
  }
}

export default BodyTemplateComponent;
import React from 'react';

interface ExampleProps {
  name: string;
}

class ExamplePane1ContentView extends React.Component<ExampleProps> {
  constructor(props: ExampleProps) {
    super(props);
  }

  render() {
    return(
      <div>
        <br/>
        <h3> Hello { this.props.name }</h3>
      </div>
    );
  }
}

export default ExamplePane1ContentView;
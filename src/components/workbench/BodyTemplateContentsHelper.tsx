import React from 'react';

import ExamplePane1ContentView from './examples/ExamplePane1ContentView';

const createContentView = (data: any) => {
  switch(data.viewId) {
    case "examplePane1ContentView":
      return (
        <ExamplePane1ContentView name={data.viewId}/>
      );
    case "examplePane1ContentView2":
      return (
        <ExamplePane1ContentView name={data.viewId}/>
    );      
    default:
      return null;
  }
}

export default createContentView;
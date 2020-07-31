import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './components/ts/Counter';
import App from './components/ts/App'
import MainTemplate from './components/workbench/MainTemplate'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <MainTemplate />, rootElement
);
// ReactDOM.render(<Counter name="React" />, rootElement);
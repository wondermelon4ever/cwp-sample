import React from 'react';
import HeaderMenu from './HeaderMenuDefault';


export default class Header extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <div>
        <HeaderMenu />
      </div>
    );
  }
}
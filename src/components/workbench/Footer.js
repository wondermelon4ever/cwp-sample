import React from 'react';
import { Typography, Link } from '@material-ui/core';
import ProTip from './Protip';


  
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
              <ProTip />
              <Copyright />
            </div>        
        );
    }
}

export default Footer;
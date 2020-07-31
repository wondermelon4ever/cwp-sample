import React from 'react';
import SplitPane from 'react-split-pane';
import { BrowserRouter, Link, Router } from 'react-router-dom';

import Footer from './Footer';
import BodyRouter from './BodyRouter';
import Header from './Header';

class MainTemplate extends React.Component {
    constructor(props: any) {
        super(props);
        
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <BrowserRouter>
                <SplitPane split="horizontal">
                    <div style={{height: '60px'}}><Header /></div>
                    <div style={{height: '980px'}}><BodyRouter /></div>
                    <div style={{height: '40px'}}><Footer /></div>
                </SplitPane>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainTemplate;

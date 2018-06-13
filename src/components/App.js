import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Login from "./Login";
import Landing from "./Landing";
import LandingDynamic from "./LandingDynamic";

import {BrowserRouter, Route} from 'react-router-dom';
import '/Users/elevy1/Desktop/Projects/swip/node_modules/react-grid-layout/css/styles.css';
import '/Users/elevy1/Desktop/Projects/swip/node_modules/react-resizable/css/styles.css';

class App extends Component {

    constructor(props){

        super(props);

        this.state = {
            appConfig: [
                {i: 'Widget A', x: 0, y: 0, w: 2, h: 4, widget: "component1"},
                {i: 'Widget B', x: 0, y: 0, w: 4, h: 4, widget: "component2"},
                {i: 'Widget C', x: 4, y: 0, w: 2, h: 4, widget: "component3"}
            ]
        }
    }

    render() {
        return (
            // className="container"
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact={true} component={Login}/>
                        {/*<Route path="/landing"  exact={true} component={(props) => <Landing {...props} appConfig={this.state.appConfig} /> } />*/}
                        <Route path="/landing"  exact={true} component={(props) => <LandingDynamic {...props} appConfig={this.state.appConfig} /> } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

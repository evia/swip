import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Login from "./Login";
import Landing from "./Landing";
import LandingDynamic from "./LandingDynamic";

import component1 from "./component1";
import component2 from "./component2";
import component3 from "./component3";


import {BrowserRouter, Route} from 'react-router-dom';
import '/Users/elevy1/Desktop/Projects/swipgit/node_modules/react-grid-layout/css/styles.css';
import '/Users/elevy1/Desktop/Projects/swipgit/node_modules/react-resizable/css/styles.css';

class App extends Component {

    constructor(props){

        super(props);

        this.state = {
            appConfig: [
                {i: 'WidgetA', x: 0, y: 0, w: 4, h: 1, widget: component1},
                {i: 'WidgetC', x: 4, y: 0, w: 4, h: 1, widget: component2},
                {i: 'WidgetB', x: 0, y: 0, w: 4, h: 1, widget: component3}

            ]
        }
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/login" exact={true} component={Login}/>
                        {/*<Route path="/landing"  exact={true} component={(props) => <Landing {...props} appConfig={this.state.appConfig} /> } />*/}
                        <Route path="/landing"  exact={true} component={(props) => <LandingDynamic {...props} appConfig={this.state.appConfig} /> } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Login from "./Login";
import Landing from "./Landing";
import DndComponent from './DndComponent';
// import LandingDynamic from "./LandingDynamic";

import {BrowserRouter, Route} from 'react-router-dom';
import '/Users/elevy1/Desktop/Projects/swip/node_modules/react-grid-layout/css/styles.css';
import '/Users/elevy1/Desktop/Projects/swip/node_modules/react-resizable/css/styles.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact={true} component={Login}/>
                        <Route path="/landing" exact={true} component={Landing} />
                        <Route path="/dnd" exact={true} component={DndComponent} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

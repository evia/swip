import React, { Component } from 'react';
import configStyles from './config-styles.js';

class emptyComponent extends Component {
    render() {
        return (
            <div>
                <h1 style={configStyles.emptyContainer}>+</h1>
            </div>
        );
    }
}

export default emptyComponent;
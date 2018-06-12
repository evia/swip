import React, { Component } from 'react';
import emptyComponent from "./emptyComponent";
import {Droppable } from 'react-drag-and-drop'
import configStyles from "./config-styles";
// import config from '../config';

const higherOrderComponent = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            return <WrappedComponent />;
        }
    }

    return HOC;
};

var DropHOC=higherOrderComponent(emptyComponent);

class DroppableHocPanel extends Component {

    constructor(props){
        super(props);

        this.state={
            location:{},
            size:{},
            componentName:"emptyComponent"
        };
    }

    onDrop(data) {
        var selectedComponent = this.props.componentsList.filter(
            (e) => e.id == data.id);

        console.log(selectedComponent[0]);
        DropHOC = higherOrderComponent(selectedComponent[0].component);

        this.setState({ componentName:selectedComponent[0].name});
    }

    render() {
        return (
            <div style={configStyles.resizableDiv}>
                <Droppable style={configStyles.containerPanel}
                           types={['id']} // <= allowed drop types
                           onDrop={(e) => this.onDrop(e)}>
                    <DropHOC></DropHOC>
                </Droppable>
            </div>
        );
    }
}

export default DroppableHocPanel;
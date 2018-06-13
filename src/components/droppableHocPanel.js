import React, { Component } from 'react';
import emptyComponent from "./emptyComponent";
import {Droppable } from 'react-drag-and-drop'
import configStyles from "./config-styles";
import widgetList from '../config';

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
            widgetName:this.props.widgetName
        };

        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(data) {
        const self= this;
        import(data.id +".js")
            .then(function (component) {
                self.setState({ widgetName:component.default});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const WidgetClass = this.state.widgetName;
        return (
            <div style={configStyles.resizableDiv}>
                <Droppable style={configStyles.containerPanel}
                           types={['id']}
                           onDrop={(e) => this.onDrop(e)}>
                    <WidgetClass></WidgetClass>
                </Droppable>
            </div>
        );
    }
}

export default DroppableHocPanel;
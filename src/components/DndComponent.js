import React, { Component } from 'react';
import './App.css';
import emptyComponent from "./emptyComponent";
import component1 from "./component1";
import component2 from "./component2";
import component3 from "./component3";
import DroppableHocPanel from "./droppableHocPanel";

import { Draggable } from 'react-drag-and-drop';

class DndComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            componentsList: [
                {id: 1, name: "component1", component: component1},
                {id: 2, name: "component2", component: component2},
                {id: 3, name: "component3", component: component3}
            ],
            containersList:[{id:1 ,component:emptyComponent}]
        };
    }

    render() {
        return (
            <div className="App">
                <div>
                    <ul>
                        {
                            this.state.componentsList.map((option, index) => {
                                return (
                                    <Draggable key={index} type="id" data={option.id}><li>{option.name}</li></Draggable>
                                )
                            })
                        }
                    </ul>
                    <DroppableHocPanel componentsList={this.state.componentsList} ></DroppableHocPanel>
                    <DroppableHocPanel componentsList={this.state.componentsList} ></DroppableHocPanel>
                </div>
            </div>
        );
    }
}

export default DndComponent;
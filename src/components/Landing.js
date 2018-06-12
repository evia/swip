import React, {Component} from 'react';

import emptyComponent from "./emptyComponent";
import component1 from "./component1";
import component2 from "./component2";
import component3 from "./component3";

import DroppableHocPanel from "./droppableHocPanel";
import { Draggable } from 'react-drag-and-drop';
import GridLayout from 'react-grid-layout';

class Landing extends Component {

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

    onDragStop(i, x, y, _ref3) {
        console.log(" On f=drag stop");
    }


    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [

            // {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'Widget A', x: 0, y: 0, w: 2, h: 4},
            {i: 'Widget B', x: 0, y: 0, w: 4, h: 4},
            {i: 'Widget C', x: 8, y: 0, w: 2, h: 4}
        ];

        return (
            <div>
                layout:
                <div>
                    <ul>
                        {
                            this.state.componentsList.map((option, index) => {
                                return (
                                    <Draggable key={index} type="id" data={option.id}>
                                        <li>{option.name}</li>
                                    </Draggable>
                                )
                            })
                        }
                    </ul>

                </div>
                <GridLayout onDragStop={(i, x, y, _ref3) => this.onDragStop(i, x, y, _ref3)} className="layout" layout={layout} cols={12} rowHeight={30} width={1400} height={1500}>
                    <div key="Widget A"><DroppableHocPanel componentsList={this.state.componentsList}></DroppableHocPanel></div>
                    <div key="Widget B"><DroppableHocPanel componentsList={this.state.componentsList}></DroppableHocPanel></div>
                    <div key="Widget C">Widget C</div>
                </GridLayout>
            </div>
        )
    }
}

export default Landing;

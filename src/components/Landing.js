import React, {Component} from 'react';

import component1 from "./component1";
import component2 from "./component2";
import component3 from "./component3";

import DroppableHocPanel from "./droppableHocPanel";
import { Draggable } from 'react-drag-and-drop';
import GridLayout from 'react-grid-layout';

import './styles.css';

class Landing extends Component {

    constructor(props){
        super(props);

        this.state = {
            widgetList: [
                {id: 1, name: "component1", component: component1},
                {id: 2, name: "component2", component: component2},
                {id: 3, name: "component3", component: component3}
            ],
            config: this.props.appConfig

        };
    }

    onDragStop(i, x, y, _ref3) {
        console.log(" On f=drag stop");
        this.state.config = i;
    }


    render() {

        return (
            <div>
                <div>
                    <ul>
                        {
                            this.state.widgetList.map((option, index) => {
                                return (
                                    <Draggable key={index} type="id" data={option.id}>
                                        <li>{option.name}</li>
                                    </Draggable>
                                )
                            })
                        }
                    </ul>

                </div>
                <GridLayout onDragStop={(i, x, y, _ref3) => this.onDragStop(i, x, y, _ref3)} className="layout" layout={this.state.config} cols={12} rowHeight={30} width={1400} height={1500}>
                    <div key="Widget A"><DroppableHocPanel componentsList={this.state.widgetList}></DroppableHocPanel></div>
                    <div key="Widget B"><DroppableHocPanel componentsList={this.state.widgetList}></DroppableHocPanel></div>
                    <div key="Widget C"><DroppableHocPanel componentsList={this.state.widgetList}></DroppableHocPanel></div>
                </GridLayout>
            </div>
        )
    }
}

export default Landing;

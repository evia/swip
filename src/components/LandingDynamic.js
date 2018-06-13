import React from "react";
import {WidthProvider, Responsive} from "react-grid-layout";
import _ from "lodash";

import widgetList from "../config.js";
import DroppableHocPanel from './droppableHocPanel';
import {Draggable} from 'react-drag-and-drop';

import './styles.css';
import emptyComponent from "./emptyComponent";


const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class LandingDynamic extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            widgetList: widgetList,
            items: this.props.appConfig,
            newCounter: 0
        };

        this.onAddItem = this.onAddItem.bind(this);
    }

    onAddItem() {
        this.setState({
            items: this.state.items.concat([{
                i: "n" + this.state.newCounter,
                x: (this.state.items.length * 2) % (this.state.cols || 12),
                y: Infinity,
                w: 2,
                h: 2,
                widget: emptyComponent
            }]),
            newCounter: this.state.newCounter + 1
        });
    }

    onLayoutChange(layout) {
        const self = this;
        debugger;
        self.setState({items: layout});
    }

    onRemoveItem(i) {
        console.log("removing", i);
        this.setState({items: _.reject(this.state.items, {i: i})});
    }

    render() {
        const getItems = () => {

            return this.state.items.map((item, index) => {
                const removeStyle = {
                    position: "absolute",
                    right: "2px",
                    top: 0,
                    cursor: "pointer"
                };
                console.log(1, item.widget);

                return (

                    <div key={index} data-grid={item}>
                        <span className="remove" style={removeStyle}
                              onClick={this.onRemoveItem.bind(this, index)}>x</span>
                        <DroppableHocPanel widgetName={item.widget}></DroppableHocPanel>
                    </div>
                );
            });

            // return _.map(this.state.items, el => this.createElement(el))
        }


        return (
            <div className="mainContainer">
                <div className="offeredWidgets">
                    <ul>
                        {
                            this.state.widgetList.map((option, index) => {
                                return (
                                    <Draggable key={index} type="id" data={option.path}>
                                        <li>{option.name}</li>
                                    </Draggable>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="widgetsPanel">
                    <button className="addItemButton" onClick={this.onAddItem}>Add Item</button>
                    <ResponsiveReactGridLayout
                    >

                        {getItems()}


                    </ResponsiveReactGridLayout>
                </div>
            </div>
        );
    }
}

export default LandingDynamic;
/*onLayoutChange={(layout) => this.onLayoutChange(this.state.items)}*/
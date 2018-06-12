import React from "react";
import {WidthProvider, Responsive} from "react-grid-layout";
import _ from "lodash";

import component1 from "./component1";
import component2 from "./component2";
import component3 from "./component3";


import DroppableHocPanel from './droppableHocPanel';
import {Draggable} from 'react-drag-and-drop';

import './styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class LandingDynamic extends React.PureComponent {

    static defaultProps = {
        className: "layout",
        cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
        rowHeight: 100
    };

    constructor(props) {
        super(props);

        this.state = {
            // items: [0, 1, 2, 3, 4].map(function (i, key, list) {
            //     return {
            //         i: i.toString(),
            //         x: i * 2,
            //         y: 0,
            //         w: 2,
            //         h: 2,
            //         add: i === (list.length - 1).toString()
            //     };
            // }),
            widgetList: [
                {id: 1, name: "component1", component: component1},
                {id: 2, name: "component2", component: component2},
                {id: 3, name: "component3", component: component3}
            ],
            items: this.props.appConfig,
            newCounter: 0
        };

        this.onAddItem = this.onAddItem.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    createElement(el) {
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
        };
        const i = el.add ? "+" : el.i;
        return (
            <div key={i} data-grid={el}>
                <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
                <DroppableHocPanel componentsList={this.state.widgetList}></DroppableHocPanel>
            </div>
        );
    }

    onAddItem() {
        /*eslint no-console: 0*/
        console.log("adding", "n" + this.state.newCounter);
        this.setState({
            // Add a new item. It must have a unique key!
            items: this.state.items.concat({
                i: "n" + this.state.newCounter,
                x: (this.state.items.length * 2) % (this.state.cols || 12),
                y: Infinity, // puts it at the bottom
                w: 2,
                h: 2
            }),
            // Increment the counter to ensure key is always unique.
            newCounter: this.state.newCounter + 1
        });
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        console.log("Here");
        this.setState({ items: layout });
    }

    onRemoveItem(i) {
        console.log("removing", i);
        this.setState({items: _.reject(this.state.items, {i: i})});
    }

    render() {
        // debugger;
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

                <button className="addItemButton" onClick={this.onAddItem}>Add Item</button>
                <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange}
                                           onBreakpointChange={this.onBreakpointChange} {...this.props}>
                    {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default LandingDynamic;

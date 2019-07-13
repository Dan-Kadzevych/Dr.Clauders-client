import React from 'react';

import { components } from 'react-select';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

import _Base from 'elements/_Base';

const cache = new CellMeasurerCache({
    fixedWidth: true
});

class VirtualizedList extends _Base {
    componentDidMount() {
        this.updateRowsHeight();
    }

    componentDidUpdate(props) {
        if (props.options.length !== this.props.options.length) {
            this.updateRowsHeight();
        }
    }

    updateRowsHeight() {
        if (this.list) {
            cache.clearAll();
            this.list.recomputeRowHeights();
        }
    }

    rowRenderer({ key, index, isScrolling, isVisible, style, parent }) {
        return (
            <CellMeasurer
                cache={cache}
                columnIndex={0}
                key={key}
                parent={parent}
                rowIndex={index}
            >
                <div style={style}>{this.props.children[index]}</div>
            </CellMeasurer>
        );
    }

    getListHeight() {
        const elementsCount =
            this.props.options.length > 10 ? 10 : this.props.options.length;
        const height = Array.from(Array(elementsCount).keys()).reduce(
            (acc, v) => {
                return acc + cache.rowHeight({ index: v });
            },
            0
        );

        return height > 300 ? 300 : height;
    }

    render() {
        return this.props.options.length ? (
            <List
                ref={ref => (this.list = ref)}
                height={this.getListHeight()}
                width={1000}
                style={{ width: '100%' }}
                deferredMeasurementCache={cache}
                rowCount={this.props.options.length}
                rowHeight={cache.rowHeight}
                rowRenderer={this.rowRenderer}
            />
        ) : (
            <components.MenuList {...this.props}>
                {this.props.children}
            </components.MenuList>
        );
    }
}

export default VirtualizedList;

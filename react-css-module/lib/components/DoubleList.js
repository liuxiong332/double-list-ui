import React from 'react'
import Immutable from 'immutable'
import LeftList from './LeftList'
import RightList from './RightList'
import {Grid, Row, Col} from 'react-bootstrap'

var DoubleList = React.createClass({
  getInitialState() {
    let list = Immutable.List.of({label: 'Hello World'}, {label: "MMDDDSSSA"});
    return {items: list};
  },

  updateIndex(index, selected) {
    let items = this.state.items;
    let newItem = Object.assign({}, items.get(index), {selected});
    this.setState({items: items.set(index, newItem)});
  },

  updateAll(selected) {
    let items = this.state.items.map(item => Object.assign({}, item, {selected: selected}));
    this.setState({items});
  },

  onSelect(index) {
    this.updateIndex(index, true);
  },

  onDeselect(index) {
    this.updateIndex(index, false);
  },

  onSelectAll() {
    this.updateAll(true);
  },

  onDeselectAll() {
    this.updateAll(false);
  },

  render() {
    let items = this.state.items;
    return (
      <Grid>
        <Row>
          <Col sm={6}>
            <LeftList items={items} onClick={this.onSelect} onSelectAll={this.onSelectAll}/>
          </Col>
          <Col sm={6}>
            <RightList items={items} onClick={this.onDeselect} onDeselectAll={this.onDeselectAll}/>
          </Col>
        </Row>
      </Grid>
    );
  }
});

export default DoubleList;

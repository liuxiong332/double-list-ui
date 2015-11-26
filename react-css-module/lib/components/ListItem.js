import React from 'react'
import {SelectListItemContent, DeselectListItemContent} from './ListItemContent'
import Immutable from 'immutable'

var ListWrapItem = React.createClass({
  propTypes: {
    index: React.PropTypes.number,
    onClick: React.PropTypes.func,
    element: React.PropTypes.element
  },

  onClick() {
    let {index, onClick} = this.props;
    return onClick(index);
  },

  render() {
    return React.cloneElement(this.props.element, {onClick: this.onClick})
  }
});

var LeftListItem = React.createClass({
  render() {
    let {label, selected, index, onClick} = this.props;
    let contentElement = <SelectListItemContent label={label} disabled={selected} />;
    return <ListWrapItem index={index} onClick={onClick} element={contentElement} />;
  }
});

var LeftList = React.createClass({
  propTypes: {
    items: React.PropTypes.object,
    onClick: React.PropTypes.func
  },

  render() {
    let listItems = this.props.items.map((item, i) =>
      <LeftListItem key={i} index={i} {...item} onClick={this.props.onClick}/>);
    return <div>{listItems}</div>
  }
});

var RightListItem = React.createClass({
  render() {
    let {label, index, onClick} = this.props;
    let contentElement = <DeselectListItemContent label={label} selected={true} />;
    return <ListWrapItem index={index} onClick={onClick} element={contentElement} />
  }
});

var RightList = React.createClass({
  propTypes: {
    items: React.PropTypes.object,
    onClick: React.PropTypes.func
  },

  render() {
    let listItems = [];
    this.props.items.forEach(({label, selected}, i) => {
      if(!selected) return;
      listItems.push(<RightListItem key={label} label={label} index={i} onClick={this.props.onClick} />);
    });
    return <div>{listItems}</div>
  }
});

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

  onSelect(index) {
    this.updateIndex(index, true);
  },

  onDeselect(index) {
    this.updateIndex(index, false);
  },

  render() {
    let items = this.state.items;
    return (
      <div>
        <div>Select</div>
        <LeftList items={items} onClick={this.onSelect} />
        <div>Deselect</div>
        <RightList items={items} onClick={this.onDeselect} />
      </div>
    );
  }
});

export default DoubleList;

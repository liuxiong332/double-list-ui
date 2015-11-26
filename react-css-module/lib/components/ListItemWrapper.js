import React from 'react'

//wrap the list item that when click the element, can return the item index.
var ListItemWrapper = React.createClass({
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

export default ListItemWrapper;

import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import {DeselectListItemContent} from './ListItemContent'
import ListItemWrapper from './ListItemWrapper'
import styles from '../styles/right-list'

var RightListItem = React.createClass({
  render() {
    let {label, index, onClick} = this.props;
    let contentElement = <DeselectListItemContent label={label} selected={true} />;
    return <ListItemWrapper index={index} onClick={onClick} element={contentElement} />
  }
});

var DeselectAllItem = React.createClass({
  render() {
    return (
      <div className={styles.selectBar} onClick={this.props.onClick}>
        <Glyphicon glyph="chevron-left" className={styles.selectButton} />
        <span className={styles.selectLabel}>Selected Items</span>
      </div>
    );
  }
});

var RightList = React.createClass({
  propTypes: {
    items: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onDeselectAll: React.PropTypes.func
  },

  render() {
    let listItems = [];
    this.props.items.forEach(({label, selected}, i) => {
      if(!selected) return;
      listItems.push(<RightListItem key={label} label={label} index={i} onClick={this.props.onClick} />);
    });
    return (
      <div className={styles.list}>
        <DeselectAllItem onClick={this.props.onDeselectAll} />
        <div>{listItems}</div>
      </div>
    );
  }
});

export default RightList;

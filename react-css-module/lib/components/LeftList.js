import React from 'react'
import {SelectListItemContent} from './ListItemContent'
import {Glyphicon} from 'react-bootstrap'
import ListItemWrapper from './ListItemWrapper'
import styles from '../styles/left-list'

var LeftListItem = React.createClass({
  render() {
    let {label, selected, index, onClick} = this.props;
    let contentElement = <SelectListItemContent label={label} disabled={selected} />;
    return <ListItemWrapper index={index} onClick={onClick} element={contentElement} />;
  }
});

var SelectAllItem = React.createClass({
  render() {
    return (
      <div className={styles.selectAllBar} onClick={this.props.onClick}>
        <span className={styles.selectAllLabel}>Select All</span>
        <Glyphicon glyph="chevron-right"/>
      </div>
    )
  }
});

var LeftList = React.createClass({
  propTypes: {
    items: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onSelectAll: React.PropTypes.func
  },

  render() {
    let listItems = this.props.items.map((item, i) =>
      <LeftListItem key={i} index={i} {...item} onClick={this.props.onClick}/>);
    return (
      <div className={styles.list}>
        <SelectAllItem onClick={this.props.onSelectAll}/>
        <div>
          {listItems}
        </div>
      </div>
    );
  }
});

export default LeftList;

import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import ListItemInfo from './ListItemInfo'
import styles from '../styles/list-item'

var ListItem = React.createClass({
  propTypes: {
    selected: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    selectButton: React.PropTypes.element,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {selected: false, disabled: false};
  },

  render() {
    let {selected, disabled, label, selectButton, onClick} = this.props;
    selectButton = React.cloneElement(selectButton, {className: styles.listItemButton, onClick});
    return (
      <div className={selected ? styles.listItemActive : styles.listItem}>
        <ListItemInfo disabled={disabled} label={label} />
        {selectButton}
      </div>
    );
  }
});

var SelectListItem = React.createClass({
  render() {
    let props = this.props;
    let rightButton = <Glyphicon glyph="chevron-right"/>;
    return <ListItem {...props} selectButton={rightButton} />;
  }
});

var DeselectListItem = React.createClass({
  render() {
    let props = this.props;
    let leftButton = <Glyphicon glyph="chevron-left"/>;
    return <ListItem {...props} selectButton={leftButton} />;
  }
});

export default {SelectListItem, DeselectListItem};

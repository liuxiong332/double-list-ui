import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import classnames from 'classnames'
import styles from '../styles/list-item-info'

var ListItemInfo = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },

  getDefaultProps() {
    return {label: '', disabled: false}
  },

  render() {
    let disabled = this.props.disabled;
    let disabledClass = {[styles.disabled]: disabled};
    let iconClass = classnames(styles.listItemIcon, disabledClass);
    let labelClass = classnames(styles.listItemLabel, disabledClass);
    return (
      <span>
        <Glyphicon glyph="star" className={iconClass}/>
        <span className={labelClass}>{this.props.label}</span>
      </span>
    );
  }
});

export default ListItemInfo;

var React = require('react');
var ReactDOM = require('react-dom');
import ListItemInfo from './components/ListItemInfo'
import {SelectListItem} from './components/ListItem'

ReactDOM.render(<SelectListItem label="Hello World" selected/>, document.getElementById('react-root'));

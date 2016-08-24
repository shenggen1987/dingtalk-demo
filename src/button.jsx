var React    = require('react'),
    ReactDOM = require('react-dom');

var Tooltip = require('uxcore-tooltip');
import './style/button.scss'
ReactDOM.render(
  <Tooltip overlay="提示文字">
    <span>鼠标移上来就会出现提示</span>
  </Tooltip>
, document.getElementById('react-container'));

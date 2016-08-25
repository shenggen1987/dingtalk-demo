var React         = require('react');
var ReactDOM      = require('react-dom');
import { Button } from 'antd';
import './components/antd/antd.css';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">搜索</Button>
    <Button type="ghost" shape="circle-outline" icon="search" />
    <Button type="ghost" icon="search">Search</Button>
  </div>,
  document.getElementById('react-container')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './components/antd/antd.css';

import { DatePicker } from 'antd';

function onChange(value, dateString) {
  console.log(value, dateString);
}

ReactDOM.render(<DatePicker onChange={onChange} />, document.getElementById('react-container'));

import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import newData from './constants/newData';

ReactDOM.render(
  <App data={newData} />,
  document.getElementById('app')
);

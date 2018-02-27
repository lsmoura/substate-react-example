import React from 'react';
import ReactDOM from 'react-dom';

import substate from 'substate';

import App from './App';

const todo = new substate();

const rootDiv = document.getElementById('root');

ReactDOM.render(
  <App state={todo} />,
  rootDiv
);

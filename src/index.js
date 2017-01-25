// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ParseTeamData from './actions/ParseTeamData';

ReactDOM.render(
  <App parseTeamData={new ParseTeamData()} />,
  document.getElementById('root')
);

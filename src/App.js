// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRow from './components/TeamRow';
import TeamTableHeader from './components/TeamTableHeader';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SubTables</h2>
				</div>
				<table>
					<TeamTableHeader />
					<tbody>
						<TeamRow />
						<TeamRow />
						<TeamRow />
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;

// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRow from './components/TeamRow';
import TeamTableHeader from './components/TeamTableHeader';
// import type {TeamProps } from './types/TeamProps'
import ParseTeamData from './actions/ParseTeamData'

class App extends Component {
	render() {
		let teams = new ParseTeamData();
		let results = teams.ParseData();
		let team = results[0];

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SubTables</h2>
				</div>
				<table>
					<TeamTableHeader />
					<tbody>
						<TeamRow {...team} />
						<TeamRow {...team} />
						<TeamRow {...team} />
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;

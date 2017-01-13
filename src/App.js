// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRow from './components/TeamRow';
import TeamTableHeader from './components/TeamTableHeader';
import type {TeamProps} from './types/TeamProps'

class App extends Component {
	fetchTeams(): TeamProps {
		return {
		teamName: 'TOTTENHAM',
		wins: 6,
		losses: 1,
		draws: 6,
		goalsFor: 12,
		goalsAgainst: 1,
		}
	}


	render() {
		let team = this.fetchTeams();

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SubTables</h2>
				</div>
				<table>
					<TeamTableHeader />
					<tbody>
						<TeamRow {...team}/>
						<TeamRow {...team}/>
						<TeamRow {...team} />
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;

// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRow from './components/TeamRow';
import TeamTableHeader from './components/TeamTableHeader';
import type {TeamProps } from './types/TeamProps'
import ParseTeamData from './actions/ParseTeamData'

class App extends Component {
	render() {
		let teams : ParseTeamData = new ParseTeamData();
		let results : Array<TeamProps> = teams.ParseData();
		results.sort((a:TeamProps,b:TeamProps) => ((b.wins * 3 + b.draws) - (a.wins * 3 + a.draws)));
		var TeamRowArray = results.map((team) => <TeamRow key={team.teamName} {...team} />);

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SubTables</h2>
				</div>
				<table>
					<TeamTableHeader />
					<tbody>
						{ TeamRowArray }
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;

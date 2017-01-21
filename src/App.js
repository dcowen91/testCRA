// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRow from './components/TeamRow';
import TeamTableHeader from './components/TeamTableHeader';
import type {TeamProps } from './types/TeamProps'
import ParseTeamData from './actions/ParseTeamData'

// TODOs
// 1. extract venueFilter to Component
// 2. add other filters as Components
// 3. add "played" column

class App extends Component {
	props: any;

	state: {
		venueFilter: "ALL" | "HOME" | "AWAY"
	};

	constructor(props : any)
	{
		super(props);
		this.state = {
			venueFilter: "ALL"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		this.setState({
			venueFilter: event.target.value
		});
	}

	render() {
		const parseTeamData: ParseTeamData = new ParseTeamData();
		let results: Array<TeamProps> = parseTeamData.ParseData(this.state);
		results.sort((a: TeamProps, b: TeamProps) => ((b.wins * 3 + b.draws) - (a.wins * 3 + a.draws)));
		let TeamRowArray = results.map((team) => <TeamRow key={team.teamName} {...team} />);

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SubTables</h2>
				</div>
				<h4>
					Filters
				</h4>
				<div className="filterContainer">
					<div className="filterRow">
						TeamsToShow
					</div>
					<div className="filterRow">
						OpponentsToShow
					</div>
					<div className="filterRow">
						HomeAwayFilter
						<div>
							<select onChange={this.handleChange} value={this.state.venueFilter}>
								<option value="ALL" >All</option>
								<option value="HOME">Home</option>
								<option value="AWAY">Away</option>
							</select>
						</div>
					</div>
				</div>
				<table>
					<TeamTableHeader />
					<tbody>
						{TeamRowArray}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;

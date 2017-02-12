import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRow from './components/TeamRow';
import TeamTableHeader from './components/TeamTableHeader';
import VenueFilter from './components/VenueFilter';
import TeamShowFilter from './components/TeamShowFilter';

// import ParseTeamData from './actions/ParseTeamData';

// TODOs
// 1. add "played" column
// 2. figure out styling
// 3. add routing support

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			venueFilter: "ALL",
			teamsToShow: this.props.parseTeamData.buildTeamBindings(),
			resultsToShow: this.props.parseTeamData.buildTeamBindings()
		};

		this.handleVenueChange = this.handleVenueChange.bind(this);
		this.handleTeamVisibilityChange = this.handleTeamVisibilityChange.bind(this);
		this.handleResultsVisibilityChange = this.handleResultsVisibilityChange.bind(this);
	}

	handleResultsVisibilityChange(event) {
		var teamName = event.target.id.split('_')[1];
		var newObj = {[teamName] : !this.state.resultsToShow[teamName] };

		var newState = Object.assign(this.state.resultsToShow, newObj);
		this.setState({ resultsToShow: newState });
	}

	handleTeamVisibilityChange(event) {
		var teamName = event.target.id.split('_')[1];
		var newObj = {[teamName] : !this.state.teamsToShow[teamName] };

		var newState = Object.assign(this.state.teamsToShow, newObj);
		this.setState({ teamsToShow: newState });
	}

	handleVenueChange(event) {
		this.setState({
			venueFilter: event.target.value
		});
	}

	render() {
		let results = this.props.parseTeamData.ParseData(this.state);
		results.sort((a, b) => ((b.wins * 3 + b.draws) - (a.wins * 3 + a.draws)));
		let TeamRowArray = results.map((team) => <TeamRow key={team.teamName} {...team} />);

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>SubTables</h2>
				</div>
				<div className="filterContainer">
					<TeamShowFilter teamsToShow={this.state.teamsToShow} handleChange={this.handleTeamVisibilityChange} title={"Show Teams"}/>
					<TeamShowFilter teamsToShow={this.state.resultsToShow} handleChange={this.handleResultsVisibilityChange} title={" Results Against"} />
					<VenueFilter venueFilter={this.state.venueFilter} handleChange={this.handleVenueChange} />
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
import React, { Component } from 'react'

class TeamShowFilter extends Component {

	toTitleCase(str) {
		return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
			return match.toUpperCase();
		});
	}

	render() {
		let results = Object.keys(this.props.teamsToShow).map(
			(teamName) =>
				<div key={teamName}>
					<label>
						<input type="radio" id={"radio_" + teamName} checked={this.props.teamsToShow[teamName]} onChange={this.props.handleChange} /> 
						{this.toTitleCase(teamName)} 
					</label>
				</div>);
		return <div className="filterRow">
			{this.props.title}
					<div className="dataContainer">
				{results}
			</div>
		</div>
	}
}

export default TeamShowFilter;
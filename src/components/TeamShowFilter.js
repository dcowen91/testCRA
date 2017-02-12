import React, { Component } from 'react'

class TeamShowFilter extends Component {

	render() {
		let results = Object.keys(this.props.teamsToShow).map(
			(teamName) =>
				<div key={teamName}>
					<label>
						<input type="radio" id={"radio_" + teamName} checked={this.props.teamsToShow[teamName]} onChange={this.props.handleChange} /> 
						{teamName} 
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
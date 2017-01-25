import React, { Component } from 'react'

class TeamShowFilter extends Component{
	render() {
		let results = Object.keys(this.props.teamsToShow).map((teamName) => <div><label> <input key={teamName} type="radio" defaultChecked={this.props.teamsToShow[teamName]} /> {teamName} </label></div>);
		return <div className="filterRow">
					TeamsToShow
					<div>
					{results}
					</div>
				</div>
	}
}

export default TeamShowFilter;
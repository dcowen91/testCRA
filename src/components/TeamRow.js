// @flow
import React, { Component } from 'react';

class TeamRow extends Component {
	state:{
		teamName: string,
		goalsFor: number,
		goalsAgainst: number,
		wins: number,
		losses: number,
		draws: number
	};

	constructor(props: any) {
		super(props);
		this.state = 
		{
			teamName: 'TOTTENHAM HOTSPUR',
			wins: 5,
			losses: 0,
			draws: 1,
			goalsFor: 13,
			goalsAgainst: 2,
		}
	}

	getPoints() {
		return this.state.wins * 3 + this.state.draws
	}

	getGoalDifference() {
		return this.state.goalsFor - this.state.goalsAgainst;
	}

	render() {
		return <tr className="TeamRow">
			<td>
				{this.state.teamName}
			</td>
			<td >
				{this.state.wins}
			</td>
			<td>
				{this.state.draws}
			</td>
			<td>
				{this.state.losses}
			</td>
			<td>
				{this.state.goalsFor}
			</td>
			<td>
				{this.state.goalsAgainst}
			</td>
			<td>
				{this.getGoalDifference()}
			</td>
			<td>
				{this.getPoints()}
			</td>
		</tr>
	}
}

export default TeamRow;

/*
{
	teamName: 'TOTTENHAM HOTSPUR',
	wins: 5,
	losses: 0,
	draws: 1,
	goalsFor: 13,
	goalsAgainst: 2,
}
//key: index
*/
// return <div className="teamRow">
		// 	<span>
		// 		{this.state.teamName}
		// 	</span>
		// 	<span className="teamData">
		// 		<br />
		// 		{this.state.wins} W : {this.state.draws}D : {this.state.losses}L
		// 	<br />
		// 		{this.state.goalsFor} GF : {this.state.goalsAgainst} GA  ({this.getGoalDifference()})
		// </span>
		// </div>
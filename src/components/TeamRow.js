// @flow
import React, { Component } from 'react';
import type {TeamProps} from './../types/TeamProps'
// type TeamProps = {
// 	teamName: string,
// 	goalsFor: number,
// 	goalsAgainst: number,
// 	wins: number,
// 	losses: number,
// 	draws: number
// }

class TeamRow extends Component {
	props: TeamProps;

	static defaultProps: {
		teamName: 'TEAM',
		wins: 1,
		losses: 1,
		draws: 1,
		goalsFor: 1,
		goalsAgainst: 1,
	};

	getPoints() {
		return this.props.wins * 3 + this.props.draws
	}

	getGoalDifference() {
		return this.props.goalsFor - this.props.goalsAgainst;
	}

	render() {
		return <tr className="TeamRow">
			<td>
				{this.props.teamName}
			</td>
			<td >
				{this.props.wins}
			</td>
			<td>
				{this.props.draws}
			</td>
			<td>
				{this.props.losses}
			</td>
			<td>
				{this.props.goalsFor}
			</td>
			<td>
				{this.props.goalsAgainst}
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
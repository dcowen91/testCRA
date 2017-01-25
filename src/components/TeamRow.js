import React, { Component } from 'react';

class TeamRow extends Component {
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

TeamRow.propTypes = {
	teamName: React.PropTypes.string.isRequired,
	wins: React.PropTypes.number.isRequired,
	losses: React.PropTypes.number.isRequired,
	draws: React.PropTypes.number.isRequired,
	goalsFor: React.PropTypes.number.isRequired,
	goalsAgainst: React.PropTypes.number.isRequired,
}

export default TeamRow;
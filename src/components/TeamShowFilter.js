import React, { Component } from 'react'

class TeamShowFilter extends Component {

	constructor(props) {
	super(props);
	this.state = {expanded: false};
	this.handleClick = this.handleClick.bind(this);
	}

	toTitleCase(str) {
		return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
			return match.toUpperCase();
		});
	}
	
	handleClick()
	{	
		this.setState({
			expanded: !this.state.expanded
		})
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
		let classNames = this.state.expanded ? "dataContainer" : "dataContainer hiddenClass";

		return	<div className="filterRow" >
					<span className="filterHeader" onClick={this.handleClick}>
						{this.props.title}
					</span>
					<div className={classNames}>
						{results}
					</div>
				</div>
	}
}

export default TeamShowFilter;
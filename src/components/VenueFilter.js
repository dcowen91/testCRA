import React, { Component } from 'react';

class venueFilter extends Component {

	constructor(props) {
		super(props);
		this.state = {expanded: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick()
	{	
		this.setState({
			expanded: !this.state.expanded
		})
	}

	render() {
		let classNames = this.state.expanded ? "dataContainer" : "dataContainer hiddenClass";

		return	<div className="filterRow" >
					<span className="filterHeader" onClick={this.handleClick}>
						Venue
					</span>
			<div className={classNames}>
					<select onChange={this.props.handleChange} value={this.props.venueFilter}>
						<option value="ALL" >All</option>
						<option value="HOME">Home</option>
						<option value="AWAY">Away</option>
					</select>
				</div>
			</div>
	}
}

venueFilter.propTypes = {
	handleChange: React.PropTypes.func.isRequired,
	venueFilter: React.PropTypes.oneOf(["ALL", "HOME", "AWAY"]).isRequired

}
export default venueFilter;
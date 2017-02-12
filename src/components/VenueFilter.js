import React, { Component } from 'react';

class venueFilter extends Component {
	render() {
		return <div className="filterRow">
			Venue
			<div className="dataContainer">
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
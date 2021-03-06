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

		return	<div className="filterRow" onClick={this.handleClick}>
					<span className="filterHeader" >
						Location
					</span>
					<span className="carat"></span>
			<div className={classNames}>
					<select size={3} onChange={this.props.handleChange} value={this.props.venueFilter}>
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
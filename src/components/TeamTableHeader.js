// @flow
import React, { Component } from 'react';

class teamTableHeader extends Component {
	render() {
		return <thead>
		<tr>
		<th>
			Team
		</th>
		<th>
			Wins
		</th>
		<th>
			Losses
		</th>
		<th>
			Draws
		</th>
		<th>
			GF
		</th>
		<th>
			GA
		</th>
		<th>
			GD
		</th>
		<th>
			Points
		</th>
		</tr>
		</thead>
	}

}

export default teamTableHeader;
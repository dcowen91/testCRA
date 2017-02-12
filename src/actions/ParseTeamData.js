const jsonData = require('./../output.json')

class ParseTeamData
{
	addResults(team , matchScore, venue)
	{
		if (venue === "HOME")
		{
			team.goalsAgainst += matchScore[1]; 
			team.goalsFor += matchScore[0];
			
			if (matchScore[1] > matchScore[0])
			{
				team.losses++;
			}
			else if (matchScore[1] < matchScore[0])
			{
				team.wins++;
			}
			else
			{
				team.draws++;
			}
		}
		else 
		{
			team.goalsAgainst += matchScore[0]; 
			team.goalsFor += matchScore[1];
			
			if (matchScore[0] > matchScore[1])
			{
				team.losses++;
			}
			else if (matchScore[0] < matchScore[1])
			{
				team.wins++;
			}
			else
			{
				team.draws++;
			}
		}
	}

	createTeamArray(jsonData, teamsToShow)
	{
		let result = [];
		for (let i = 0; i < jsonData.TeamNamesByIndex.length; i++)
		{
			if (!!teamsToShow[i])
			{
				var teamData = 
				{
					teamName : jsonData.TeamNamesByIndex[i],
					wins: 0,
					losses: 0,
					draws: 0,
					goalsFor: 0,
					goalsAgainst: 0,
				};
				result[i] = teamData;
			}
		}
		return result;
	}

	createStateRows(jsonData, teamsToShow, opponentsToShow, locationFilter)
	{
		let teamArray = this.createTeamArray(jsonData, teamsToShow);

		const jsonArray = jsonData.resultsArray;
		for (let i = 0; i < jsonArray.length; i++)
		{
			let currentRow = jsonArray[i];
			for (let j = 0; j < currentRow.length; j++)
			{
				if (!!currentRow[j])
				{
					if (!!teamsToShow[i] && !!opponentsToShow[j] && (locationFilter === "HOME" || locationFilter === "ALL"))
					{
						this.addResults(teamArray[i], currentRow[j], "HOME");
					}
					if (!!teamsToShow[j] && !!opponentsToShow[i] && (locationFilter === "AWAY" || locationFilter === "ALL"))
					{
						this.addResults(teamArray[j], currentRow[j], "AWAY");
					}
				}
			}
		}
		return teamArray;
	}

	buildTeamBindings()
	{
		let resultObject = {}
		jsonData.TeamNamesByIndex.forEach(function(element) {
			resultObject[element] = true;
		}, this);
		return resultObject;
	}


	ParseData(filters)
	{
		return this.createStateRows(jsonData,Object.values(filters.teamsToShow), Object.values(filters.resultsToShow), filters.venueFilter);
	}
}

export default ParseTeamData;
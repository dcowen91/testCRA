// @flow
// const fs = require('fs')
// import fs from 'fs';
import type {TeamProps } from './../types/TeamProps'
// let jsonData = require('json!./../output.JSON');
const jsonData = require('./../output.JSON')

class ParseTeamData
{
	addResults(team : TeamProps, matchScore : Array<number>, venue : string)
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

	createTeamArray(jsonData : any, teamsToShow : Array<bool>): Array<TeamProps>
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

	createStateRows(jsonData : any, teamsToShow : Array<bool>, opponentsToShow : Array<bool>, locationFilter : string): Array<TeamProps>
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

	ParseData() : Array<TeamProps>
	{
		// let jsonData = JSON.parse(fs.readFileSync('output.JSON', 'utf8'));
		// const top6 = [true,false,false,true,false,false,false,false,true,true,true,false,false,false,false,false,true,false,false,false];
		// const bottom5 = [false,false,false,false,true,false,true,false,true,false,false,true,false,false,true,true,false,false,false,false];
		const all = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];

		return this.createStateRows(jsonData,all,all, "ALL");
	}
}

export default ParseTeamData;
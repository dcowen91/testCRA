const fs = require('fs')
let request = require('request');
let cheerio = require('cheerio');

const TeamNameToIndexMapping = {
	"ARSENAL": 0,
	"BOURNEMOUTH": 1,
	"BURNLEY": 2,
	"CHELSEA": 3,
	"CRYSTAL PALACE": 4,
	"EVERTON": 5,
	"HULL": 6,
	"LEICESTER CITY": 7,
	"LIVERPOOL": 8,
	"MANCHESTER CITY": 9,
	"MANCHESTER UNITED": 10,
	"MIDDLESBROUGH": 11,
	"SOUTHAMPTON": 12,
	"STOKE CITY": 13,
	"SUNDERLAND": 14,
	"SWANSEA CITY": 15,
	"TOTTENHAM HOTSPUR": 16,
	"WATFORD": 17,
	"WEST BROMWICH ALBION": 18,
	"WEST HAM UNITED": 19
};
const TeamNamesByIndex = [
	"ARSENAL",
	"BOURNEMOUTH",
	"BURNLEY",
	"CHELSEA",
	"CRYSTAL PALACE",
	"EVERTON",
	"HULL",
	"LEICESTER CITY",
	"LIVERPOOL",
	"MANCHESTER CITY",
	"MANCHESTER UNITED",
	"MIDDLESBROUGH",
	"SOUTHAMPTON",
	"STOKE CITY",
	"SUNDERLAND",
	"SWANSEA CITY",
	"TOTTENHAM HOTSPUR",
	"WATFORD",
	"WEST BROMWICH ALBION",
	"WEST HAM UNITED"
];

const baseUrl = 'http://en.wikipedia.org/w/api.php?action=parse&page=2016%E2%80%9317_Premier_League&prop=text&section=9&format=json';

function transformNode(result) {
	if (!!result && result === "—") {
		return null;
	}
	else if (!!result) {
		return result.split('–').map(Number);
	}
	return result;
}

function FetchData() {
	request(baseUrl, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			let result = JSON.parse(body);
			let rawHtml = result.parse.text["*"];
			let $ = cheerio.load(rawHtml);

			// -1 to acount for header
			let rowCount = $('tr').length - 1;
			let resultsArray = new Array(rowCount);

			$('tr').each(function (i, tr) {
				if (i !== 0) {
					let $$ = cheerio.load(tr);
					let currentRowArray = new Array(rowCount);
					$$('td').each(function (j, td) {
						let result = null;
						if (td.lastChild != null) {
							if (td.lastChild.lastChild != null) {
								let data = td.lastChild.lastChild.data;
								if (data !== "a") {
									result = data;
								}
							}
							else if (!!td.lastChild.data) {
								result = td.lastChild.data;
							}
						}
						currentRowArray[j] = transformNode(result);
					});
					resultsArray[i - 1] = currentRowArray;
				}
			});
			var outputObject = { TeamNamesByIndex, TeamNameToIndexMapping, resultsArray };
			let output = JSON.stringify(outputObject);
			fs.writeFile("src\\output.json", output, function (err) {
				if (err) {
					console.log("ERROR: " + err.message)
				}
				else {
					console.log("SUCCESS: wrote data to output.json");
				}
			});
		}
	});
}

FetchData();
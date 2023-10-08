const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const apiKey = process.env.STEAM_API_KEY;
const steamId = process.env.STEAM_USER_ID; 

if (!apiKey || !steamId) {
	console.error('Please provide your Steam Web API key and Steam User ID in the .env file.');
	process.exit(1);
}

const steamWebAPI = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/';

axios.get(`${steamWebAPI}?key=${apiKey}&steamid=${steamId}&format=json`)
	.then(response => {
		const games = response.data.response.games;

		if (games.length > 0) {
			const gameIds = games.map(game => game.appid.toString());

			const gameIdsText = gameIds.join(', ');

			// Export to a text file
			fs.writeFileSync('exportedIDS.txt', gameIdsText, 'utf8');

			console.log('Steam library game IDs exported to exportedIDS.txt.');
		} else {
			console.log('No game IDs found in your Steam library.');
		}
	})
	.catch(error => {
		console.error('An error occurred:', error);
	});

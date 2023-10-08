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
const steamUserAPI = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/';

axios.get(`${steamWebAPI}?key=${apiKey}&steamid=${steamId}&format=json`)
    .then(async response => {
        const games = response.data.response.games;

        if (games.length > 0) {
            const gameIds = games.map(game => game.appid.toString());

            // Export to a text file
            fs.writeFileSync('exported-name-IDS.txt', 'Game IDs and Names:\n', 'utf8');

            for (const gameId of gameIds) {
                try {
                    const userResponse = await axios.get(`${steamUserAPI}?key=${apiKey}&steamids=${steamId}`);
                    const playerName = userResponse.data.response.players[0].personaname;

                    const gameResponse = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${gameId}`);
                    const gameData = gameResponse.data[gameId];

                    if (gameData.success) {
                        const gameName = gameData.data.name;
                        fs.appendFileSync('exported-name-IDS.txt', `ID: ${gameId}, Name: ${gameName}\n`, 'utf8');
                    }
                } catch (error) {
                    console.error('An error occurred:', error);
                }
            }

            console.log('Steam library game name & IDs and names exported to exported-name-IDS.txt.');
        } else {
            console.log('No game IDs found in your Steam library.');
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });

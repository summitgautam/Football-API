# Football Players API
## Description
Football players API is a simple API of football that can be used for fetching data in football related projects. I searched up for a footabll dataset. I found one and built an api with the help of it, This api takes the data from datasets and compiles it, I parsed the JSON data and made many routes so that this API user can fetch data for specific field too.

## Features:
There are many features that I added by making different routes so that the user can fetch specific data too. They are given below:
- /api/players - Fetches all 17954 players.
- /api/players/:name - Fetches any player by specific name.
- /api/top/:n - Get top n players by rating.
- /api/country/:country - Get players by country.
- /api/position/:position - Get players by specific position.
- /api/rating/:rating - Get players by specific rating.
- /api/random - Get a random player.
- /api/nationality-list - Get list of nationalities.
- /api/top-dribblers - Get top 10 dribblers.
- /api/top-pacers - Get top 10 pacers.
- /api/top-passers - Get top 10 passers.
- /api/top-finishers - Get top 10 finishers.
- /api/best-value - Get best valued players.
- /api/top10 - Get top 10 players.

## Image
Down here is a representative image of how the api sends the data (in JSON format) with values too:
<img src="./public/api ss.png">

## How to use it?
We can use it very easily, we just have to fetch the data from https://football-players-api-nns0.onrender.com/api/players for the all players and you can fetch specifically too like the ways mentioned above.

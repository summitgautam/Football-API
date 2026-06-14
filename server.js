const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());
let players = [];

fs.readFile("./football_players_data.json", "utf8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    try{
        players = JSON.parse(data);
        console.log(`Loaded ${players.length} players and started the server.`);
    }catch(error){
        console.error(error);
    }
});

app.get('/',(req,res)=>{
    res.json({
        name: "Football Players API",
        description: "This is an API that provides the info about many football players. This data is little old so be aware of that.",
        version: "1.0.1",
        endpoints:[
            "/api/players - GET all players",
            "api/players/:name - Get player by name",
            "/api/top/:n - Get top n players",
            "/api/country/:country - Get players by country",
            "/api/position/:position - Get players by specific position",
            "/api/rating/:rating - Get players with rating specified",
            "/api/random - Get random player",
            "/api/nationality-list - Get list of nationalities",
            "/api/top-dribblers - Get top 10 dribblers",
            "/api/top-passers - Get top 10 passers",
            "/api/top-pacers - Get top 10 pacers",
            "/api/top-finishers - Get top 10 finishers",
            "/api/best-value - Get most valuable players",
            "/api/top10 - Get top 10 players",
            "/api/n?n=<value> - Get top n players like if <value> is 6 then top 6 players will be returned."
        ]
    })
});
app.get("/api/players",(req,res)=>{
    const limit = parseInt(req.query.limit);
    if(limit){
        return res.json(players.slice(0,limit));
    }
    res.json(players);
});

app.get("/api/player/:name", (req,res)=>{
    const name = req.params.name.toLowerCase();
    const result = players.filter(player=> player.full_name.toLowerCase().includes(name));
    res.json(result);
});

app.get("/api/top/:n", (req,res)=>{
    const n = parseInt(req.params.n);
    const result= [...players].sort((a,b)=> b.overall_rating - a.overall_rating).slice(0,n);
    res.json(result);
})

app.get("/api/country/:country", (req,res)=>{
    const country = req.params.country.toLowerCase();
    const result = players.filter(p=> p.nationality.toLowerCase()===country);
    res.json(result);
});

app.get("/api/position/:position",(req,res)=>{
    const position = req.params.position.toLowerCase();
    const result = players.filter(p=>p.positions.includes(position));
    res.json(result);
})

app.get("/api/rating/:rating",(req,res)=>{
    const rating = parseInt(req.params.rating);
    const result = players.filter(p=>p.overall_rating = rating);
    res.json(result);
})

app.get("/api/top10",(req,res)=>{
    const result = [...players].sort((a,b)=>b.overall_rating-a.overall_rating).slice(0,10);
    res.json(result);
})
app.get("/api/n",(req,res)=>{
    const n = parseInt(req.query.n);
    const result = [...players].sort((a,b)=>b.overall_rating-a.overall_rating).slice(0,n);
    res.json(result);
})

app.get("/api/random", (req,res)=>{
    const randomplayer = players[Math.floor(Math.random()*players.length)];
    res.json(randomplayer);
})

app.get("/api/best-value",(req,res)=>{
    const result = [...players].sort((a,b)=> 
    (b.overall_rating/b.value_euro)-(a.overall_rating/a.value_euro)).slice(0,10);
    res.json(result);
})

app.get("/api/nationality-list",(req,res)=>{
    const countries = [...new Set(players.map(p=>p.nationality))].sort();
    res.json(countries);
})

app.get("/api/top-dribblers",(req,res)=>{
    const result = [...players].sort((a,b)=>b.dribbling-a.dribbling).slice(0,10);
    res.json(result);
})

app.get("/api/top-finishers",(req,res)=>{
    const result = [...players].sort((a,b)=>b.finishing-a.finishing).slice(0,10);
    res.json(result);
})

app.get("/api/top-passers",(req,res)=>{
    const result = [...players].sort((a,b)=> b.passing-a.passing).slice(0,10);
    res.json(result);
})

app.get("api/top-pacers",(req,res)=>{
    const result = [...players].sort((a,b)=> b.pace-a.pace).slice(0,10);
    res.json(result);
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
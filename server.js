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
    
});

app.listen(port,()=>{
    console.log(`Visit http://localhost:${port}`);
})
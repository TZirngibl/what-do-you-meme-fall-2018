const express = require('express');
const { Game, Player} = require('./model');

var game = new Game();

const app = express.Router();


app.get("/", function(req, res){
    res.send(game);
})
app.get("/captions/:id", function(req, res){
    res.send(game.players[req.params.id].captions());
})

app.post('/players', (req, res) => {
    const player = new Player(req.body.name);
    game.players.push(player);
    res.send(player);
})
app.post('/picture', (req, res) => {
    game.flipPicture();
    res.send(game.picture);
})

module.exports = app;
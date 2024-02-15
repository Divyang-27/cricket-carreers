const Player = require('../models/player');

exports.postPlayer = async (req, res, next) => {
  const name = req.body.name;
  const dob = req.body.dob;
  const imageUrl = req.body.imageUrl;
  const birthPlace = req.body.birthPlace;
  const career = req.body.career;
  const numberOfMatches = req.body.numberOfMatches;
  const score = req.body.score;
  const fifties = req.body.fifties;
  const centuries = req.body.centuries;
  const wickets = req.body.wickets;
  const average = req.body.average;
  const player = await Player.create({
    name: name,
    dob: dob,
    imageUrl: imageUrl,
    birthPlace: birthPlace,
    career: career,
    numberOfMatches: numberOfMatches,
    score: score,
    fifties: fifties,
    centuries: centuries,
    wickets: wickets,
    average: average,
  });
  res.json({ newPlayerDetails: player });
};
exports.getPlayer = async (req, res, next) => {
  const players = await Player.findAll();
  return res.json({ allPlayerDetails: players });
};

exports.getfindPlayer = async (req, res, next) => {
  const name = req.params.playerName;
  const player = await Player.findOne({ where: { name: name } });
  return res.json({ playerDetails: player });
};

exports.deletePlayer = async (req, res, next) => {
  const id = req.params.playerId;
  Player.destroy({ where: { id: id } });
};

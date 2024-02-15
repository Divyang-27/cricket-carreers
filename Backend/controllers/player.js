const Player = require('../models/player');

exports.postPlayer = async (req, res, next) => {
  const player = await Player.create({
   ...req.body
  });
  res.json({ newPlayerDetails: player });
};
exports.getPlayer = async (req, res, next) => {
  const players = await Player.findAll();
  res.send({ allPlayerDetails: players });
};

exports.getfindPlayer = async (req, res, next) => {
  const name = req.params.playerName;
  const player = await Player.findOne({ where: { name: name } });
  return res.send({ playerDetails: player });
};

exports.deletePlayer = async (req, res, next) => {
  const id = req.params.playerId;
  Player.destroy({ where: { id: id } });
};

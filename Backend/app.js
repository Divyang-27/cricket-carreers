const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const playerRoutes = require('./routes/player');
const sequelize = require('./utils/database');
app.use(cors());
app.use(bodyParser.json({ extend: false }));
app.use('/', playerRoutes);
sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

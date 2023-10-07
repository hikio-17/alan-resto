/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const db = require('./models');

const app = express();
require('dotenv').config();

const corsOptions = {
  origin: '*',
};

/** MIDDLEWARE */
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

/** MAIN ROUTE */
const routesDir = path.join(__dirname, 'routes');
fs.readdirSync(routesDir).map((r) => {
  app.use('/api', require(`${routesDir}/${r}`));
});

/** CONNECT TO DB AND RUN SERVER */
const PORT = process.env.PORT || 5000;

db.sequelize.authenticate().then(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
});

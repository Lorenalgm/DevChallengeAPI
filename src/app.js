const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./config/dotenv');

const errorHandler = require('./middlewares/errorHandler');
const routeNotFound = require('./middlewares/routeNotFound');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(routeNotFound);
app.use(errorHandler);

module.exports = app;

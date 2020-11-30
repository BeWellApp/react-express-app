const path = require('path');
const express = require('express'),
  app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contentRouter = require('./routes/content');
require("dotenv").config(); //

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/content', contentRouter);
app.use('/api/users', usersRouter);

//*Connect to mongodb
const mongoUrl = "mongodb://localhost:27017/beWell";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log("connected to mongodb"))
  .catch(err => {
    console.log("error connecting to db" + err.message);
  });

const PORT = process.env.PORT | 4000
app.listen(PORT, () => {
  console.log("listening on port" + PORT);
})
